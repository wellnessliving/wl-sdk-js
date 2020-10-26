/**
 * API to get data from an existing postcard template.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_Campaign_CampaignEdit_CampaignEditTemplateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Time passed from the start of the verification process.
   *
   * @get get
   * @type {string}
   */
  this.k_postcard = "0";

  /**
   * Back image.
   *
   * @get result
   * @type {string}
   */
  this.url_back = undefined;

  /**
   * Front image.
   *
   * @get result
   * @type {string}
   */
  this.url_front = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_Campaign_CampaignEdit_CampaignEditTemplateModel);

/**
 * @inheritDoc
 */
Wl_Postcard_Campaign_CampaignEdit_CampaignEditTemplateModel.prototype.config=function()
{
  return {
    "a_field": {
      "k_postcard": {
        "get": {
          "get": true
        }
      },
      "url_back": {
        "get": {
          "result": true
        }
      },
      "url_front": {
        "get": {
          "result": true
        }
      }
    }
  };
};