/**
 * Manages promotion payment pause periods.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_PromotionPayPauseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * End date of pause period in login promotion timezone. Can be set to special value
   * {@link PromotionPayPause::DATE_END_INDEFINITE} to make the period indefinite until further action.
   * 
   * <tt>null</tt> if it shouldn't be updated.
   *
   * @get get,result
   * @post get
   * @put get
   * @type {?string}
   */
  this.dt_end = null;

  /**
   * Start date of pause period in login promotion timezone.
   * 
   * <tt>null</tt> if it shouldn't be updated.
   *
   * @get get,result
   * @post get
   * @put get
   * @type {?string}
   */
  this.dt_start = null;

  /**
   * Key of login promotion to create pause for.
   * Primary key in {@link \RsLoginPromotionSql} table.
   * 
   * Ignored if {@link $k_promotion_pay_pause} is provided.
   * 
   * <tt>null</tt> if not initialized.
   *
   * @delete get
   * @get get,result
   * @post get
   * @type {?string}
   */
  this.k_login_promotion = null;

  /**
   * Key of the payment pause period to read or update.
   * Primary key in {@link \RsPromotionPayPauseSql} table.
   * 
   * <tt>null</tt> if not initialized or request is based on {@link $k_login_promotion}.
   *
   * @delete get
   * @get get,result
   * @post get,result
   * @put get,result
   * @type {?string}
   */
  this.k_promotion_pay_pause = null;

  /**
   * Additional notes for promotion payment pause period.
   * 
   * <tt>null</tt> if it shouldn't be updated.
   *
   * @get result
   * @post post
   * @put post
   * @type {?string}
   */
  this.text_note = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_PromotionPayPauseModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_PromotionPayPauseModel.prototype.config=function()
{
  return {
    "a_field": {
      "dt_end": {
        "get": {
          "get": true,
          "result": true
        },
        "post": {
          "get": true
        },
        "put": {
          "get": true
        }
      },
      "dt_start": {
        "get": {
          "get": true,
          "result": true
        },
        "post": {
          "get": true
        },
        "put": {
          "get": true
        }
      },
      "k_login_promotion": {
        "delete": {
          "get": true
        },
        "get": {
          "get": true,
          "result": true
        },
        "post": {
          "get": true
        }
      },
      "k_promotion_pay_pause": {
        "delete": {
          "get": true
        },
        "get": {
          "get": true,
          "result": true
        },
        "post": {
          "get": true,
          "result": true
        },
        "put": {
          "get": true,
          "result": true
        }
      },
      "text_note": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        },
        "put": {
          "post": true
        }
      }
    }
  };
};