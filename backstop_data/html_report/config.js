report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_MerQbiz_Landing_Page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20180612-153956/backstop_default_MerQbiz_Landing_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_MerQbiz_Landing_Page_0_document_0_desktop.png",
        "label": "MerQbiz Landing Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://merqbiz.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2874
          },
          "misMatchPercentage": "25.79",
          "analysisTime": 245
        },
        "diffImage": "../bitmaps_test/20180612-153956/failed_diff_backstop_default_MerQbiz_Landing_Page_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_MerQbiz_Landing_Page_0_document_1_phone.png",
        "test": "../bitmaps_test/20180612-153956/backstop_default_MerQbiz_Landing_Page_0_document_1_phone.png",
        "selector": "document",
        "fileName": "backstop_default_MerQbiz_Landing_Page_0_document_1_phone.png",
        "label": "MerQbiz Landing Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://merqbiz.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2753
          },
          "misMatchPercentage": "11.05",
          "analysisTime": 69
        },
        "diffImage": "../bitmaps_test/20180612-153956/failed_diff_backstop_default_MerQbiz_Landing_Page_0_document_1_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_MerQbiz_Login_Page_0_document_0_desktop.png",
        "test": "../bitmaps_test/20180612-153956/backstop_default_MerQbiz_Login_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_MerQbiz_Login_Page_0_document_0_desktop.png",
        "label": "MerQbiz Login Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/login",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_MerQbiz_Login_Page_0_document_1_phone.png",
        "test": "../bitmaps_test/20180612-153956/backstop_default_MerQbiz_Login_Page_0_document_1_phone.png",
        "selector": "document",
        "fileName": "backstop_default_MerQbiz_Login_Page_0_document_1_phone.png",
        "label": "MerQbiz Login Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/login",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});