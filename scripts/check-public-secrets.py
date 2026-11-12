#!/usr/bin/env python3
"""Fail CI if a likely credential is added to the public static frontend.
Never print suspected secret contents.
"""
from pathlib import Path
import re,sys
root=Path(__file__).resolve().parents[1]
patterns=[
 re.compile(r'(?i)(?:api[_-]?key|access[_-]?token|client[_-]?secret|private[_-]?key)\s*[:=]\s*["\x27][^"\x27\s]{16,}'),
 re.compile(r'(?:AIza[0-9A-Za-z_-]{30,}|ghp_[0-9A-Za-z]{30,}|github_pat_[0-9A-Za-z_]{30,}|sk-[0-9A-Za-z_-]{20,}|nvapi-[0-9A-Za-z_-]{20,})')
]
suspects=[]
for pattern in ('*.js','*.html','*.css','*.json'):
 for file in root.glob(pattern):
  for number,line in enumerate(file.read_text(errors='replace').splitlines(),1):
   if any(p.search(line) for p in patterns): suspects.append(f'{file.name}:{number}')
if suspects:
 print('Potential frontend credentials at:',*suspects,sep='\n - ')
 sys.exit(1)
print('Public frontend credential scan passed.')
