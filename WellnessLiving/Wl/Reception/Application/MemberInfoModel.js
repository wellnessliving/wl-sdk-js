/**
 * Returns member information and notification items for the Self Check-In Web App.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Application_MemberInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_full,dt_date";

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_info_a_icon
   * @property {string} s_color_background Color of background.
   * @property {string} s_color_foreground Color of letter.
   * @property {string} s_letter Icon letter.
   * @property {string} s_shape Symbol from font of shapes.
   * @property {string} s_title Title.
   * @property {string} sid_shape SID of the icon type shape. Constant from {@link Wl_Login_Type_ShapeSid}.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_info_a_vaccination_status
   * @property {string} sid_vaccination_status Vaccination status sid. Result from {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid} method.
   * @property {string} text_vaccination_status Vaccination status.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_info_a_note
   * @property {string} html_note HTML text ready to be pasted in browser.
   * @property {boolean} is_flag `true` if this note has a flag; `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_info
   * @property {Wl_Reception_Application_MemberInfoModel_a_info_a_icon} a_icon List of icons with additional information about business member.
   * @property {Wl_Reception_Application_MemberInfoModel_a_info_a_note} a_note List of client's notes. Every element has keys:
   * @property {Wl_Reception_Application_MemberInfoModel_a_info_a_vaccination_status} a_vaccination_status Information about users vaccination status.
   * @property {string} html_credit Amount the client owns to the business.
   * @property {string} html_note User`s login notes.
   * @property {number} i_visit_credit Count of unpaid visits if client has at least one.
   * @property {boolean} is_account_positive If the user has a positive balance on his account.
   * @property {boolean} is_birthday If a user has a birthday today.
   * @property {boolean} is_contract `true` if client has some contracts that he should agree.
   * @property {boolean} is_family_payer `true` if the user makes payments for a family member, `false` otherwise.
   * @property {boolean} is_first `true` if this is a first visit of the client.
   * @property {boolean} is_form `true` if the client has uncompleted one or more forms.
   * @property {boolean} is_task_active `true` if for user exists not completed tasks.
   * @property {boolean} is_task_urgent `true` if for user exists urgent tasks.
   * @property {boolean} is_waiver `true` if client has not agreed with online waiver.
   * @property {string} k_currency Currency of business `$k_business`.
   * @property {string} m_credit User's account balance.
   * @property {boolean} show_amount Display user balance or not.
   * @property {string} text_address User's address.
   * @property {string} text_age Users age. Appears only on the day of birth.
   * @property {string} text_firstname Users first name.
   * @property {string} text_mail User's email.
   * @property {string} text_phone User's cell phone.
   * @property {string} text_visit_credit Link to the page with client's attendance.
   * @property {string} url_attendance Link to the page with information about client's account balance.
   * @property {string} url_billing Link to user's billing page.
   * @property {string} url_contract Link to user's contract page
   * @property {string} url_form Link to user's forms page.
   * @property {string} url_overview Link to the client's overview page. Empty if for user not existing active or urgent tasks.
   * @property {string} url_profile Link to user's profile.
   * @property {string} url_waiver Link to user's waiver page.
   */

  /**
   * Additional member data or `null` if any data can be shown.
   * Will be filled if {@link Wl_Member_Info_InfoModel.is_full} flag is set.
   *
   * @get result
   * @type {?Wl_Reception_Application_MemberInfoModel_a_info}
   */
  this.a_info = null;

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_items
   * @property {string} html_message Message for info box.
   * @property {number} id_color ID of color the notice is displayed in. One of {@link Wl_Reception_Application_MemberInfoColorSid} constants.
   * @property {number} id_icon ID of icon that accompanies the message. One of {@link Wl_Reception_Application_MemberInfoIconSid} constants.
   * @property {string} text_class Name of the class for styles.
   * @property {string} text_message Plain message for info box.
   */

  /**
   * The options presented in the web app.
   *
   * The items are generated this way due to JavaScript limitations around translated messages.
   *
   * @get result
   * @type {Wl_Reception_Application_MemberInfoModel_a_items[]}
   */
  this.a_items = undefined;

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_result_list_a_info_a_icon
   * @property {string} s_color_background Color of background.
   * @property {string} s_color_foreground Color of letter.
   * @property {string} s_letter Icon letter.
   * @property {string} s_shape Symbol from font of shapes.
   * @property {string} s_title Title.
   * @property {string} sid_shape SID of the icon type shape. Constant from {@link Wl_Login_Type_ShapeSid}.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_result_list_a_info_a_vaccination_status
   * @property {string} sid_vaccination_status Vaccination status sid. Result from {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid} method.
   * @property {string} text_vaccination_status Vaccination status.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_result_list_a_info_a_note
   * @property {string} html_note HTML text ready to be pasted in browser.
   * @property {boolean} is_flag `true` if this note has a flag; `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_result_list_a_info
   * @property {Wl_Reception_Application_MemberInfoModel_a_result_list_a_info_a_icon} a_icon List of icons with additional information about business member.
   * @property {Wl_Reception_Application_MemberInfoModel_a_result_list_a_info_a_note} a_note List of client's notes. Every element has keys:
   * @property {Wl_Reception_Application_MemberInfoModel_a_result_list_a_info_a_vaccination_status} a_vaccination_status Information about users vaccination status.
   * @property {string} html_credit Amount the client owns to the business.
   * @property {string} html_note User`s login notes.
   * @property {number} i_visit_credit Count of unpaid visits if client has at least one.
   * @property {boolean} is_account_positive If the user has a positive balance on his account.
   * @property {boolean} is_birthday If a user has a birthday today.
   * @property {boolean} is_contract `true` if client has some contracts that he should agree.
   * @property {boolean} is_family_payer `true` if the user makes payments for a family member, `false` otherwise.
   * @property {boolean} is_first `true` if this is a first visit of the client.
   * @property {boolean} is_form `true` if the client has uncompleted one or more forms.
   * @property {boolean} is_task_active `true` if for user exists not completed tasks.
   * @property {boolean} is_task_urgent `true` if for user exists urgent tasks.
   * @property {boolean} is_waiver `true` if client has not agreed with online waiver.
   * @property {string} k_currency Currency of business `$k_business`.
   * @property {string} m_credit User's account balance.
   * @property {boolean} show_amount Display user balance or not.
   * @property {string} text_address User's address.
   * @property {string} text_age Users age. Appears only on the day of birth.
   * @property {string} text_firstname Users first name.
   * @property {string} text_mail User's email.
   * @property {string} text_phone User's cell phone.
   * @property {string} text_visit_credit Link to the page with client's attendance.
   * @property {string} url_attendance Link to the page with information about client's account balance.
   * @property {string} url_billing Link to user's billing page.
   * @property {string} url_contract Link to user's contract page
   * @property {string} url_form Link to user's forms page.
   * @property {string} url_overview Link to the client's overview page. Empty if for user not existing active or urgent tasks.
   * @property {string} url_profile Link to user's profile.
   * @property {string} url_waiver Link to user's waiver page.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_result_list
   * @property {Wl_Reception_Application_MemberInfoModel_a_result_list_a_info} a_info Additional user's information.
   * @property {boolean} is_traveller `true` - user is traveller; `false` - not traveller.
   * @property {string} s_member User's member number.
   * @property {string} text_first_name User's first name.
   * @property {string} text_fullname User's name.
   * @property {string} url_barcode Link to barcode image to scan member number.
   */

  /**
   * List of users data.
   * Keys - users primary keys. Values - users data. 
   * Keys refer to clients' primary keys, and values refer to clients' data.
   * If `null`, data for a single client is being requested.
   *
   * @get result
   * @type {?Wl_Reception_Application_MemberInfoModel_a_result_list}
   */
  this.a_result_list = null;

  /**
   * Primary keys of users whose information must be returned.
   *
   * `null` if data of a single user is requested.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * List of dates for load additional information about users.
   *
   * Key is UID of user. Value is date.
   *
   * `null` if data of a single user is requested.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid_date = null;

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_visit_last
   * @property {string} dtu_visit Datetime visit in UTC.
   * @property {?string} k_appointment Appointment key.  `null` if it is not service or asset session.
   * @property {?string} k_class_period Class period key.  `null` if it is not class or event session.
   * @property {string} k_location Location key.
   */

  /**
   * Information about last visit of the user.
   *
   * @get result
   * @type {Wl_Reception_Application_MemberInfoModel_a_visit_last}
   */
  this.a_visit_last = undefined;

  /**
   * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_visit_next
   * @property {string} dtu_visit Datetime visit in UTC.
   * @property {?string} k_appointment Appointment key.  `null` if it is not service or asset session.
   * @property {?string} k_class_period Class period key.  `null` if it is not class or event session.
   * @property {string} k_location Location key.
   */

  /**
   * Information about next visit of the user.
   *
   * @get result
   * @type {Wl_Reception_Application_MemberInfoModel_a_visit_next}
   */
  this.a_visit_next = undefined;

  /**
   * Date of the session, if we show it on the appointment info window or on the attendance list.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Count attend visits for one client.
   *
   * @get result
   * @type {number}
   */
  this.i_lifetime_visit = undefined;

  /**
   * `true` - if API is being used from backend, `false` - otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If you need to return additional information set to `true` or `false` if not.
   *
   * @get get
   * @type {boolean}
   */
  this.is_full = false;

  /**
   * If `true`, the client is a traveler. Otherwise, this will be `false`.
   * This will be `null` in cases when the client is a walk-in. Or when {@link Wl_Reception_Application_MemberInfoModel.is_full} is `false`.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_traveller = null;

  /**
   * The business ID required to access client information.
   *
   * Specify this as `0` to retrieve the system-wide version of the information.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location where the Self Check-In Web App is running.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * ID of the visit, if we show icons on the attendance list and information that depends on visit is required.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The member's lifetime value.
   *
   * @get result
   * @type {string}
   */
  this.m_lifetime_value = undefined;

  /**
   * The member ID.
   *
   * If `null`, the specified client isn't a member of the specified business.
   *
   * @get result
   * @type {?string}
   */
  this.s_member = null;

  /**
   * Key of the Check In application.
   *
   * @get get
   * @type {string}
   */
  this.s_secret = "";

  /**
   * A list of icons with additional information about the business member.
   * If empty, all available icons will be displayed.
   * Comma separated values from {@link Wl_Member_Info_MemberInfoSid} method.
   *
   * @get get
   * @type {string}
   */
  this.s_show = "";

  /**
   * First user's name.
   *
   * @get result
   * @type {string}
   */
  this.text_first_name = undefined;

  /**
   * Full user's name.
   *
   * @get result
   * @type {string}
   */
  this.text_fullname = undefined;

  /**
   * ID of a user to retrieve member information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * URL to barcode image.
   *
   * @get result
   * @type {string}
   */
  this.url_barcode = undefined;

  /**
   * URL to email.
   *
   * @get result
   * @type {string}
   */
  this.url_email = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Application_MemberInfoModel);

/**
 * @inheritDoc
 */
Wl_Reception_Application_MemberInfoModel.prototype.config=function()
{
  return {"a_field":{"a_info":{"get":{"result":true}},"a_items":{"get":{"result":true}},"a_result_list":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"a_uid_date":{"get":{"get":true}},"a_visit_last":{"get":{"result":true}},"a_visit_next":{"get":{"result":true}},"dt_date":{"get":{"get":true}},"i_lifetime_visit":{"get":{"result":true}},"is_backend":{"get":{"get":true}},"is_full":{"get":{"get":true}},"is_traveller":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_visit":{"get":{"get":true}},"m_lifetime_value":{"get":{"result":true}},"s_member":{"get":{"result":true}},"s_secret":{"get":{"get":true}},"s_show":{"get":{"get":true}},"text_first_name":{"get":{"result":true}},"text_fullname":{"get":{"result":true}},"uid":{"get":{"get":true}},"url_barcode":{"get":{"result":true}},"url_email":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Reception_Application_MemberInfoModel.instanceGet
 * @param {string} k_business The business ID required to access client information. Specify this as `0` to retrieve the system-wide version of the information.
 * @param {string} uid ID of a user to retrieve member information for.
 * @param {boolean} is_full If you need to return additional information set to `true` or `false` if not.
 * @param {string} dt_date Date of the session, if we show it on the appointment info window or on the attendance list.
 * @returns {Wl_Reception_Application_MemberInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns member information and notification items for the Self Check-In Web App.
 *
 * Returns the user's profile data along with any notification items (such as expiring memberships, required waivers,
 * or outstanding balances) that should be displayed during the self check-in flow.
 *
 * @function
 * @name Wl_Reception_Application_MemberInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
