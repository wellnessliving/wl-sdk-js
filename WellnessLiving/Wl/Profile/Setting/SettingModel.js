/**
 * Retrieves a list of user settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Setting_SettingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = 'uid,k_business';

  /**
   * Whether 'Booking Confirmation Email' group is enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_email_booking_confirmation = true;

  /**
   * Whether 'Booking Reminder Email' group is enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_email_booking_reminder = true;

  /**
   * Whether 'Company News Email' group is enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_email_news = true;

  /**
   * Whether all emails enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_email_notification = true;

  /**
   * Whether 'Review Request Email' group is enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_email_review = true;

  /**
   * Whether all Push is enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_push_notification = true;

  /**
   * Whether all SMS is enabled.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_sms_notification = true;

  /**
   * ID of current business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Setting_SettingModel);

/**
 * @inheritDoc
 */
Wl_Profile_Setting_SettingModel.prototype.config=function()
{
  return {
    "a_field": {
      "is_email_booking_confirmation": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "is_email_booking_reminder": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "is_email_news": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "is_email_notification": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "is_email_review": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "is_push_notification": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "is_sms_notification": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "k_business": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "uid": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      }
    }
  };
};

/**
 * @function
 * @name Wl_Profile_Setting_SettingModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @returns {Wl_Profile_Setting_SettingModel}
 * @see WlSdk_ModelAbstract.instanceGet()
*/