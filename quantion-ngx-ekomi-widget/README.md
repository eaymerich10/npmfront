# QuantionNgxEkomiWidgets

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

Add ekomi Widgets to angular projects. Ekomi Rank Widget, Ekomi Smart Widget or Ekomi Showroom Widget

## Install

npm i quantion-ekomi-widgets

## Use smartWidget


## Use example ekomi Smart Widget:

  <app-ekomi-smart-widget
    [customerId]="store.ekomiCustomerId ? store.ekomiCustomerId : '113601'"
    [language]="store.ekomiLanguage ? store.ekomiLanguage : 'es'"
    [widgetTokens]="store.ekomiWidgetsToken ? store.ekomiWidgetsToken : 'sf1136015ae0940e54138'">
  </app-ekomi-smart-widget>

## Use example Rank  Widget:

  <app-ekomi-rank-widget
    [locale]="store.ekomiCustomerId ? store.ekomiCustomerId : '113601'"
    [v]="'20200918'"
    [id]="'rptf1c3a9606b30013776c40cc47a050450'">
  </app-ekomi-rank-widget>

## Use Example showroom Widget:

  <app-ekomi-showroom-widget
    [locale]="store.ekomiCustomerId ? store.ekomiCustomerId : 'es'"
    [v]="'20200918'"
    [id]="'rpt_showroom_f1c3a9606b30013776c40cc47a050450'">
  </app-ekomi-showroom-widget>

