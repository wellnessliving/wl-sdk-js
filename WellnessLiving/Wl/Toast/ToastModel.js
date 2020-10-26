/**
 * Api to manage toast messages.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Toast_ToastModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Array of result data.
   *
   * @get result
   * @type {{}}
   */
  this.a_data = undefined;

  /**
   * Array of primary keys of toast messages in {@link ToastSql} table.
   *
   * @put post
   * @type {{}}
   */
  this.a_toasts = undefined;

  /**
   * Type of the notification {@link ToastSid}.
   *
   * @post post
   * @type {number}
   */
  this.id_type = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {number}
   */
  this.k_business = undefined;

  /**
   * Notification message.
   *
   * @post post
   * @type {string}
   */
  this.s_message = undefined;

  /**
   * Primary key of registered user in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Toast_ToastModel);

/**
 * @inheritDoc
 */
Wl_Toast_ToastModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_data": {
        "get": {
          "result": true
        }
      },
      "a_toasts": {
        "put": {
          "post": true
        }
      },
      "id_type": {
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
        },
        "put": {
          "get": true
        }
      },
      "s_message": {
        "post": {
          "post": true
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