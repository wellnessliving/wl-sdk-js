/**
 * Api for get data of the partners.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Curves_PartnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * A partner list. Where key is key partner, value is name of the partner.
   *
   * @get result
   * @type {?{}}
   */
  this.a_partner = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Curves_PartnerModel);

/**
 * @inheritDoc
 */
Wl_Integration_Curves_PartnerModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_partner": {
        "get": {
          "result": true
        }
      }
    }
  };
};