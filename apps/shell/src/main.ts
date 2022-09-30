import { loadManifest } from '@angular-architects/module-federation';

 loadManifest("/assets/mfe.manifest.json")
   .catch(err => console.error(err))
   .then(_ => import('./bootstrap'))
   .catch(err => console.error(err));


// import('./bootstrap')
// 	.catch(err => console.error(err));
