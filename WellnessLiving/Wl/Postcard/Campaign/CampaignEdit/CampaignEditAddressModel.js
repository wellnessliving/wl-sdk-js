/**
 * API to get summary data about direst mail campaign.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_Campaign_CampaignEdit_CampaignEditAddressModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Verified addresses.
   *
   * @get result
   * @type {{}}
   */
  this.a_deliverable = undefined;

  /**
   * Verified addresses.
   *
   * @get result
   * @type {{}}
   */
  this.a_failed = undefined;

  /**
   * Verified addresses.
   *
   * @get result
   * @type {{}}
   */
  this.a_low = undefined;

  /**
   * Time passed from the start of the verification process.
   *
   * @get get
   * @type {number}
   */
  this.i_minutes_elapsed = 0;

  /**
   * Indicated if the task is finished.
   *
   * @get result
   * @type {boolean}
   */
  this.is_finished = undefined;

  /**
   * Indicated if there are unverified addresses in the array.
   *
   * @get result
   * @type {boolean}
   */
  this.is_unverified = undefined;

  /**
   * Campaign key.
   *
   * @get get
   * @type {string}
   */
  this.k_postcard_campaign = "0";

  /**
   * Task ID.
   *
   * @get get
   * @type {string}
   */
  this.s_task_id = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_Campaign_CampaignEdit_CampaignEditAddressModel);

/**
 * @inheritDoc
 */
Wl_Postcard_Campaign_CampaignEdit_CampaignEditAddressModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_deliverable": {
        "get": {
          "result": true
        }
      },
      "a_failed": {
        "get": {
          "result": true
        }
      },
      "a_low": {
        "get": {
          "result": true
        }
      },
      "i_minutes_elapsed": {
        "get": {
          "get": true
        }
      },
      "is_finished": {
        "get": {
          "result": true
        }
      },
      "is_unverified": {
        "get": {
          "result": true
        }
      },
      "k_postcard_campaign": {
        "get": {
          "get": true
        }
      },
      "s_task_id": {
        "get": {
          "get": true
        }
      }
    }
  };
};