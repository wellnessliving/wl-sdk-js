/**
 * Entry point to manipulate direct mail campaign.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_PostcardAddressModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Result address hash.
   *
   * @get result
   * @type {string}
   */
  this.html_address_id = undefined;

  /**
   * Indicates if the address needs to be saved into the database.
   *
   * @get get
   * @type {boolean}
   */
  this.is_save = undefined;

  /**
   * The address.
   *
   * @get get
   * @type {string}
   */
  this.text_address = undefined;

  /**
   * Result deliverability status.
   *
   * @get result
   * @type {string}
   */
  this.text_deliverability = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_PostcardAddressModel);

/**
 * @inheritDoc
 */
Wl_Postcard_PostcardAddressModel.prototype.config=function()
{
  return {
    "a_field": {
      "html_address_id": {
        "get": {
          "result": true
        }
      },
      "is_save": {
        "get": {
          "get": true
        }
      },
      "text_address": {
        "get": {
          "get": true
        }
      },
      "text_deliverability": {
        "get": {
          "result": true
        }
      }
    }
  };
};