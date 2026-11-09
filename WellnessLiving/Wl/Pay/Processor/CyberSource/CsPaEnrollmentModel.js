/**
 * Checks `CyberSource` Payer Authentication enrollment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel_a_device_info
   * @property {number} i_browser_color_depth Color depth of the screen in bits per pixel.
   * @property {number} i_browser_screen_height User browser screen height.
   * @property {number} i_browser_screen_width User browser screen width.
   * @property {number} i_browser_time_difference Time difference between UTC and the local time of the browser in minutes, as `getTimezoneOffset()` gives.
   * @property {string} s_browser_language Language of the browser, an IETF BCP47 tag.
   */

  /**
   * User device info: 
   *
   * The optional fields go to Cybersource only when the device data collection did not complete. A value that does not
   * suit them is not sent to Cybersource, and does not fail the request.
   *
   * @post post
   * @type {Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel_a_device_info}
   */
  this.a_device_info = undefined;

  /**
   * Key of payment transaction that was previously created with {@link Thoth_PayProcessor_CyberSource_CsPaSetupModel}.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = "";

  /**
   * How the device data collection ended: the message of its frame as it was received, or `timeout` if the frame did
   * not answer in the time that the page waits for it.
   *
   * The check of the enrollment goes on in any case. It has no validators: no message of the frame can stop a payment.
   *
   * `null` if the client does not report it: a widget, or a page opened before this field appeared.
   *
   * @post post
   * @type {?string}
   */
  this.s_collection = null;

  /**
   * JSON Web Token to include into the request to the second frame.
   *
   * @post result
   * @type {?string}
   */
  this.s_jwt = null;

  /**
   * URL for frontend interaction.
   * This normally means that payer needs to make further steps for the authentication.
   *
   * `null` if no interaction required, and we should proceed with the withdrawal.
   * This normally means that payer is authenticated.
   *
   * If payer is not authenticated, or there is an error occurred during check of the enrollment,
   * this API returns an exception.
   *
   * @post result
   * @type {?string}
   */
  this.url_interact = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel.prototype.config=function()
{
  return {"a_field":{"a_device_info":{"post":{"post":true}},"k_pay_transaction":{"post":{"post":true}},"s_collection":{"post":{"post":true}},"s_jwt":{"post":{"result":true}},"url_interact":{"post":{"result":true}}}};
};

/**
 * Checks `CyberSource` Payer Authentication enrollment.
 *
 * Verifies whether the payer must complete additional authentication steps for the transaction
 * started by {@link Thoth_PayProcessor_CyberSource_CsPaSetupModel}, returning a JWT and interaction URL when a challenge is required.
 *
 * @function
 * @name Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
