/**
 * Retrieves information about a member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_full,dt_date";

  /**
   * Additional member data or <tt>null</tt> if any data can be shown. Will be filled if {@link InfoApi::$is_full} flag is set. See result of {@link MemberInfoView::dataPrepare()} method.
   *
   * @get result
   * @type {?{}}
   */
  this.a_info = null;

  /**
   * List of users data.
   * Keys - users primary keys. Values - users data; see {@link \Wl\Member\Info\InfoApi::_get()} for details.
   *
   * <tt>null</tt> if data of a single user is requested.
   *
   * @get result
   * @type {?{}}
   */
  this.a_result_list = null;

  /**
   * Primary keys of users whose information must be returned.
   *
   * <tt>null</tt> if data of a single user is requested.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * Date of the session, if we we show it on the appointment info window or on the attendance list.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * <tt>true</tt> - if API is being used from backend, <tt>false</tt> - otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = 0;

  /**
   * If you need to return additional information set to <tt>true</tt> or <tt>false</tt> if not.
   *
   * @get get
   * @type {boolean}
   */
  this.is_full = 0;

  /**
   * <tt>true</tt> if user is traveller; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * ID of a business to retrieve information within.
   *
   * 0 to retrieve system-wide version of information.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of the visit, if we show icons on the attendance list and information that depends on visit is required.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Member ID. <tt>null</tt> if specified user is not a member of specified business.
   *
   * @get result
   * @type {?string}
   */
  this.s_member = null;

  /**
   * List of icons with additional information about business member.
   * If empty, then all available icons will be displayed.
   * Comma separated sids from {@link MemberInfoSid}.
   *
   * @get get
   * @type {string}
   */
  this.s_show = "";

  /**
   * Full user name.
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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Member_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_info": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_full": {"get": {"get": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_visit": {"get": {"get": true}},"s_member": {"get": {"result": true}},"s_show": {"get": {"get": true}},"text_fullname": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_barcode": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Member_Info_InfoModel.instanceGet
 * @param {string} k_business ID of a business to retrieve information within. 0 to retrieve system-wide version of information.
 * @param {string} uid ID of a user to retrieve member information for.
 * @param {boolean} is_full If you need to return additional information set to <tt>true</tt> or <tt>false</tt> if not.
 * @param {string} dt_date Date of the session, if we we show it on the appointment info window or on the attendance list.
 * @returns {Wl_Member_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */