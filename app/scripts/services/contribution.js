'use strict';

angular.module('app')
  .factory('Contribution', function($http, $q, $filter) {
    var baseUrl = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/34/query';

    var stringifyParams = function(paramsObj) {
      var paramArray = [];
      var keys = Object.keys(paramsObj);
      if(keys.length) {
        angular.forEach(keys, function(key) {
          var itemString = (typeof paramsObj[key] === 'string') ? ( key + "='" + paramsObj[key] + "'" ) : ( key + "=" + paramsObj[key] );
          paramArray.push(itemString);
        });

        var paramString = paramArray.join(' AND ');
        return paramString;
      } else {
        return '1=1';
      }
    };

    return {
      // getIds: function(params) {
      //   ;
      // },
      get: function(params) {
        // var count = 0;
        // var stepMax = 200;
        // var maxResults = 1000;
        // var results = [];

        // $http.get(baseUrl + '?returnGeometry=false&returnIdsOnly=true&f=json&where=' + stringifyParams(params))
        // .then(function(res){
          // console.log(res.data.objectIds);
          // var queryIds = res.data.objectIds;
          // if(queryIds.length > maxResults) {
            // return queryLarge(queryIds);
          // }
          // else {
          //   // queryStandard();
          // }
        // },
        // function(err) {
        //   return $q.reject(err);
        // });

        // var queryLarge = function(queryIds){
        //   console.log(queryIds);
        //   var ids = queryIds.slice(count, stepMax).join(',');
        //   console.log(ids);
        //   $http.get(baseUrl + '?objectIds=' + ids + '&outFields=*&f=json').then(success, fail);
        // };

        // var queryStandard = function(){
          return $http.get(baseUrl + '?where=' + stringifyParams(params) + '&outFields=*&f=json')
          .then(function(res){
            var results=[];
            angular.forEach(res.data.features, function(contrib){
              var contribData = {
                address: contrib.attributes.ADDRESS,
                addressId: contrib.attributes.ADDRESS_ID,
                amount: contrib.attributes.AMOUNT,
                candidateName: contrib.attributes.CANDIDATENAME,
                committeeName: contrib.attributes.COMMITTEENAME,
                contributionType: contrib.attributes.CONTRIBUTIONTYPE,
                contributorName: contrib.attributes.CONTRIBUTORNAME,
                contributorType: contrib.attributes.CONTRIBUTORTYPE,
                dateReceived: $filter('date')(contrib.attributes.DATEOFRECEIPT, 'MM/dd/yyyy'),
                electionYear: contrib.attributes.ELECTIONYEAR,
                employer: contrib.attributes.EMPLOYER,
                employerAddress: contrib.attributes.EMPLOYERADDRESS,
                normalizedAddress: contrib.attributes.FULLADDRESS,
                lat: contrib.attributes.LATITUDE,
                long: contrib.attributes.LONGITUDE,
                objectId: contrib.attributes.OBJECTID
              };
              results.push(contribData);
            });
            return results;
          }, function(err){
            return $q.reject(err);
          });

        // var success = function(res, queryIds) {
        //   console.log(res.data.features);
        //   results = results.concat(res.data.features);
        //   if(res.data.features.length === stepMax && count < queryIds.length) {
        //     // console.log('big query');
        //     count += stepMax;
        //     return queryLarge(queryIds);
        //   }
        //   return {data: results};
        // };

        // var fail = function(err) {
        //   return $q.reject(err);
        // };

        // return query();
      }
    };

  });
