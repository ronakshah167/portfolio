(() => {
  'use strict';

  const maxAttempts = 7;
  const storageKey = 'ronak-siu-shootout-best';
  const lanePositions = [24.7, 50, 75.3];
  const keeperPattern = [1, 0, 1, 2];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const panel = document.querySelector('.shootout-panel');
  const ui = Object.fromEntries(
    ['goals', 'best', 'attempts', 'pitch', 'ball', 'burst', 'keeper', 'match-status', 'kick-off']
      .map(id => [id, document.getElementById(id)])
  );
  const buttons = [...panel.querySelectorAll('[data-lane]')];
  const markers = Array.from({ length: maxAttempts }, () => document.createElement('li'));
  ui.attempts.append(...markers);

  let shots = [];
  let best = 0;
  try { best = Number(localStorage.getItem(storageKey)) || 0; } catch (_) {}
  let live = false;
  let shooting = false;
  let keeperLane = 1;
  let keeperTimer;
  let shotTimer;
  let ballFlight;

  function renderScore() {
    const goals = shots.filter(Boolean).length;
    ui.goals.textContent = goals;
    ui.best.textContent = best;
    markers.forEach((marker, index) => {
      const result = index >= shots.length ? 'pending' : shots[index] ? 'goal' : 'save';
      marker.dataset.result = result;
      marker.setAttribute('aria-label', 'Penalty ' + (index + 1) + ', ' + result);
      marker.textContent = { goal: '✓', save: '×', pending: '·' }[result];
    });
    return goals;
  }

  function setKeeperLane(lane) {
    keeperLane = lane;
    ui.keeper.style.setProperty('--keeper-x', ((lane + 0.5) * 100 / 3) + '%');
  }

  function setControls(enabled) {
    buttons.forEach(button => { button.disabled = !enabled; });
  }

  function nextPenalty() {
    ui.burst.hidden = true;
    ballFlight?.cancel();
    ui.ball.style.removeProperty('left');
    ui.ball.style.removeProperty('top');
    setControls(true);
    ui['match-status'].textContent = 'Penalty ' + (shots.length + 1) + ' of ' + maxAttempts + '.';
    let step = Math.floor(Math.random() * keeperPattern.length);
    setKeeperLane(keeperPattern[step]);
    const holdTime = Math.max(350, 850 - shots.length * 75);
    keeperTimer = setInterval(() => {
      step = (step + 1) % keeperPattern.length;
      setKeeperLane(keeperPattern[step]);
    }, holdTime);
  }

  function shoot(lane) {
    if (!live || shooting) return;
    shooting = true;
    clearInterval(keeperTimer);
    const scored = lane !== keeperLane;
    const targetX = lanePositions[lane] + '%';
    ui.ball.style.left = targetX;
    ui.ball.style.top = '46%';
    const delay = reducedMotion.matches ? 0 : 290;
    if (delay && ui.ball.animate) {
      ballFlight = ui.ball.animate(
        [{ left: '50%', top: '83%' }, { left: targetX, top: '46%' }],
        { duration: delay, easing: 'ease-out' }
      );
    }

    shotTimer = setTimeout(() => {
      shots.push(scored);
      const goals = shots.filter(Boolean).length;
      if (goals > best) {
        best = goals;
        try { localStorage.setItem(storageKey, String(best)); } catch (_) {}
      }
      renderScore();
      const result = scored ? 'Goal!' : 'Saved!';
      ui.burst.textContent = scored ? 'SIU!' : 'SAVED!';
      ui.burst.hidden = false;
      if (shots.length === maxAttempts) {
        live = false;
        setControls(false);
        ui['kick-off'].textContent = 'Play again';
        ui['match-status'].textContent = result + ' Full time. ' + goals + ' of ' + maxAttempts + ' scored.';
        ui['kick-off'].focus();
        return;
      }
      ui['match-status'].textContent = result;
      shotTimer = setTimeout(() => {
        shooting = false;
        nextPenalty();
      }, 680);
    }, delay);
  }

  ui['kick-off'].addEventListener('click', () => {
    clearTimeout(shotTimer);
    clearInterval(keeperTimer);
    shots = [];
    live = true;
    shooting = false;
    ui['kick-off'].textContent = 'Restart';
    renderScore();
    nextPenalty();
    buttons[1].focus();
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => shoot(Number(button.dataset.lane)));
  });

  panel.addEventListener('keydown', event => {
    if (!live || !buttons.includes(event.target) || event.altKey || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const lane = ['ArrowLeft', 'ArrowUp', 'ArrowRight'].indexOf(event.key);
    if (lane === -1) return;
    event.preventDefault();
    if (!event.repeat) shoot(lane);
  });

  renderScore();
})();
