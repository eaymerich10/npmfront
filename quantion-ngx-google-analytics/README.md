# QuantionNgxGoogleAnalytics Google Analytics Gtag Version for Angular x2>

Load Google Analytics gtag script and track user navigation, and track custom events.


### 1. Import in app.module Google Analytics Module
```javascript
import { GoogleAnalyticsModule } from 'quantion-ngx-google-analytics';
```


### 2. Add in imports and add Google analytics Id in app.module

```javascript
@NgModule({
  imports: [
    GoogleAnalyticsModule.forRoot(
      {
        googleAnalyticsId: 'UA-XXXXXXXXX-1'
      })
    ]
  })

```


### 3. Import in app.component to track user navigation between pages:

```javascript
import { GoogleAnalyticsEventTrackingService } from 'quantion-ngx-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(
    private googleAnalytics: GoogleAnalyticsEventTrackingService
    ) {}

  ngOnInit(): void {
    this.googleAnalytics.trackNavigation();
  }
}
```


### 4. If you want track Google Analytics Custom events in some component:

```javascript
import { GoogleAnalyticsEventTrackingService } from 'quantion-ngx-google-analytics';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html'
})
export class SomeComponent implements OnInit {

  constructor(
    private googleAnalytics: GoogleAnalyticsEventTrackingService
  ) { }

  trackCustomEvent(): void {
    this.googleAnalytics.event({
      eventAction: 'YOUR_EVENT_ACTION',
      eventCategory: 'YOUR_EVENT_CATEGORY',
      eventLabel: 'YOUR_EVENT_LABEL',
      eventValue: 10 // Number, value of event
    });
  }
}
```


You can read more information about Google Analytics Custom Events here: https://developers.google.com/analytics/devguides/collection/gtagjs/events

### Note: use in package.json Workspace:

```javascript
  "build:lib:google": "ng-packagr -p projects/quantion-ngx-google-analytics/ng-package.json cp README.md dist/quantion-ngx-google-analytics/README.md cp LICENSE dist/quantion-ngx-google-analytics/LICENSE",
```
