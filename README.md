# pwmetrics-ci

Results of POC in local machine:
```
{ url: 'http://localhost:5000/apps/ng-bootstrap-closure-compiler/',
  timings: 
   { ttfcp: 
      { title: 'First Contentful Paint',
        timing: '2580.31',
        score: '2.24' },
     ttfmp: 
      { title: 'First Meaningful Paint',
        timing: '2580.33',
        score: '1.33' },
     psi: 
      { title: 'Perceptual Speed Index',
        timing: '2625.53',
        score: '1.38' },
     fv: 
      { title: 'First Visual Change',
        timing: '2605.51',
        score: '2.24' },
     vc85: 
      { title: 'Visually Complete 85%',
        timing: '2606.17',
        score: '1.32' },
     vc100: 
      { title: 'Visually Complete 100%',
        timing: '2933.51',
        score: '1.41' },
     tti: 
      { title: 'Time to Interactive (vAlpha)',
        timing: '3456.17',
        score: '1.75' } } }
```

Results of POC in Travis:
```
{ url: 'http://localhost:5000/apps/ng-bootstrap-closure-compiler/',
  timings: 
   { ttfcp: 
      { title: 'First Contentful Paint',
        timing: '2690.27',
        score: '2.23' },
     ttfmp: 
      { title: 'First Meaningful Paint',
        timing: '2690.29',
        score: '1.47' },
     psi: 
      { title: 'Perceptual Speed Index',
        timing: '2746.54',
        score: '1.47' },
     fv: 
      { title: 'First Visual Change',
        timing: '2708.49',
        score: '1.46' },
     vc85: 
      { title: 'Visually Complete 85%',
        timing: '2708.90',
        score: '1.46' },
     vc100: 
      { title: 'Visually Complete 100%',
        timing: '4850.49',
        score: '2.55' },
     tti: 
      { title: 'Time to Interactive (vAlpha)',
        timing: '3958.90',
        score: '2.13' } } }
```
