/**
 * Allows to modify business payment schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_PayChangeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * New local date without time of the next payment.
   * 
   * Not specified if should not be changed.
   *
   * @put result,post
   * @type {string}
   */
  this.dt_pay = undefined;

  /**
   * Saved amount of the payment.
   *
   * @put result
   * @type {string}
   */
  this.html_amount_pay = undefined;

  /**
   * Saved date of the transaction in user friendly format.
   *
   * @put result
   * @type {string}
   */
  this.html_date_pay = undefined;

  /**
   * Type of the payment that should be modified.
   * One of {@link \Wl\Business\Account\PaySid} constants.
   *
   * @put post
   * @type {number}
   */
  this.id_pay = undefined;

  /**
   * Defines whether data should be reverted to default.
   *
   * @put post
   * @type {boolean}
   */
  this.is_reset = undefined;

  /**
   * Key of the business for which payment schedule should be modified.
   * Primary key from {@link \RsBusinessSql}.
   *
   * @put post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * New amount of the next payment for achieve application.
   * 
   * Not specified if should not be changed.
   *
   * @put post
   * @type {string}
   */
  this.m_amount = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_PayChangeModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_PayChangeModel.prototype.config=function()
{
  return {
    "a_field": {
      "dt_pay": {
        "put": {
          "result": true,
          "post": true
        }
      },
      "html_amount_pay": {
        "put": {
          "result": true
        }
      },
      "html_date_pay": {
        "put": {
          "result": true
        }
      },
      "id_pay": {
        "put": {
          "post": true
        }
      },
      "is_reset": {
        "put": {
          "post": true
        }
      },
      "k_business": {
        "put": {
          "post": true
        }
      },
      "m_amount": {
        "put": {
          "post": true
        }
      }
    }
  };
};