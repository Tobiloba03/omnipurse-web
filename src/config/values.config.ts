export class Values
{
    static host = window.location.href.indexOf('backup') !== -1 ?
    'https://backup.hygeiahmo.com/' : (window.location.href.indexOf('online') !== -1 ? 
    'https://online.hygeiahmo.com/' : 'https://sandbox.hygeiahmo.com/');


  static apiUrl = window.location.href.indexOf('localhost') !== -1 ?
    'https://localhost:44353/api/' : `${Values.host}hygeiaapiserviceuat/api/`;
}