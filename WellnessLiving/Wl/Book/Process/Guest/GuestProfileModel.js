/**
 * Check if user exists.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Guest_GuestProfileModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,id_service,k_id,text_mail,text_first_name,text_last_name,dl_birthday";

  /**
   * Guest's birthday in MySQL format. Empty if service not restricted by age.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dl_birthday = "";

  /**
   * The mode type used to determine the Lead Source for the created guest.
   * One of the {@link Wl_Mode_ModeSid} constants. Default is {@link Wl_Mode_ModeSid}.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Type of the service to book.
   *
   * @get get
   * @post get
   * @see Wl_Service_ServiceSid
   * @type {number}
   */
  this.id_service = 0;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of service to book.
   * Depending on {@link Wl_Book_Process_Guest_GuestProfileModel.id_service} value:,
   * <ul>
   *     <li>{@link Wl_Service_ServiceSid} - class key. </li>
   *     <li>{@link Wl_Service_ServiceSid} - service key.</li>
   *     <li>{@link Wl_Service_ServiceSid} - resource key.</li>
   * </ul>
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Guest's first name.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_first_name = "";

  /**
   * Guest's last name.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_last_name = "";

  /**
   * Guest's email.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * UID of found or created user.
   *
   * @get result
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Guest_GuestProfileModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Guest_GuestProfileModel.prototype.config=function()
{
  return {"a_field":{"dl_birthday":{"get":{"get":true},"post":{"get":true}},"id_mode":{"post":{"post":true}},"id_service":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_id":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true}},"text_first_name":{"get":{"get":true},"post":{"get":true}},"text_last_name":{"get":{"get":true},"post":{"get":true}},"text_mail":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"result":true},"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Guest_GuestProfileModel.instanceGet
 * @param {string} k_business Business key.
 * @param {number} id_service Type of the service to book.
 * @param {string} k_id Key of service to book. Depending on {@link Wl_Book_Process_Guest_GuestProfileModel.id_service} value:, <ul> <li>{@link Wl_Service_ServiceSid} - class key. </li> <li>{@link Wl_Service_ServiceSid} - service key.</li> <li>{@link Wl_Service_ServiceSid} - resource key.</li> </ul>
 * @param {string} text_mail Guest's email.
 * @param {string} text_first_name Guest's first name.
 * @param {string} text_last_name Guest's last name.
 * @param {string} dl_birthday Guest's birthday in MySQL format. Empty if service not restricted by age.
 * @returns {Wl_Book_Process_Guest_GuestProfileModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Check if user exists.
 *
 * Looks up a guest by email within the specified business and service context. Returns the user key if an
 * existing member is found whose email, birthday (when required), and location eligibility all pass validation.
 *
 * @function
 * @name Wl_Book_Process_Guest_GuestProfileModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates new user.
 *
 * Creates a new guest profile (or reuses an existing non-member account) for the specified business and service,
 * applying birthday and virtual-account rules, and returns the UID of the created or matched user.
 *
 * @function
 * @name Wl_Book_Process_Guest_GuestProfileModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
