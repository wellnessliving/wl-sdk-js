/**
 * Returns information about user for self check in application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Reception\Application\MemberInfoApi
 */
function Wl_Reception_Application_MemberInfoModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @inheritDoc
     */
    this._s_key = "k_business,uid,is_full,dt_date";

    /**
     * Additional member data or `null` if any data can be shown. Will be filled if {@link Wl_Reception_Application_MemberInfoModel.is_full} flag is set.
     *
     * @get result
     * @type {?{}}
     */
    this.a_info = null;

    /**
     * @typedef {{}} Wl_Reception_Application_MemberInfoModel_a_items
     * @property {string} id_color ID of color the notice is displayed in.
     * One of {@link Wl_Reception_Application_MemberInfoColorSid} constants.
     * @property {string} id_icon ID of icon that accompanies the message.
     * One of {@link Wl_Reception_Application_MemberInfoIconSid} constants.
     * @property {string} text_class Name of the class for styles.
     * @property {string} text_message Plain message for info box.
     * @property {string} html_message Message for info box.
     */

    /**
     * Items, which are prepared for application.
     *
     * They are generated here, because js has limitation for work with translated messages.
     *
     * <dl>
     *   <dt>string <var>id_color</var></dt>
     *   <dd>
     *     ID of color the notice is displayed in.
     *     One of {@link Wl_Reception_Application_MemberInfoColorSid} constants.
     *   </dd>
     *   <dt>string <var>id_icon</var></dt>
     *   <dd>
     *     ID of icon that accompanies the message.
     *     One of {@link Wl_Reception_Application_MemberInfoIconSid} constants.
     *   </dd>
     *   <dt>string <var>text_class</var></dt>
     *   <dd>Name of the class for styles.</dd>
     *   <dt>string <var>text_message</var></dt>
     *   <dd>Plain message for info box.</dd>
     *   <dt>string <var>html_message</var></dt>
     *   <dd>Message for info box.</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Reception_Application_MemberInfoModel_a_items[]}
     */
    this.a_items = [];

    /**
     * List of users data.
     * Keys - users primary keys. Values - users data.
     *
     * `null` if data of a single user is requested.
     *
     * @get result
     * @type {?{}}
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
     * Date of the session, if we show it on the appointment info window or on the attendance list.
     *
     * @get get
     * @type {string}
     */
    this.dt_date = "";

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
     * `true` if user is traveller; `false` otherwise.
     * `null` in case when user is walk-in or when {@link Wl_Reception_Application_MemberInfoModel.is_full} is `false`.
     *
     * @get result
     * @type {?boolean}
     */
    this.is_traveller = null;

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
     * Key of the location, where Self Check In application is run.
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
     * Member ID. `null` if specified user is not a member of specified business.
     *
     * @get result
     * @type {?string}
     */
    this.s_member = null;

    /**
     * Key of the Check In application.
     *
     * Read more {@link Wl\Reception\Application\MainController::$s_secret}.
     *
     * @get get
     * @type {string}
     */
    this.s_secret = "";

    /**
     * List of icons with additional information about business member.
     * If empty, then all available icons will be displayed.
     *
     * @get get
     * @type {string}
     */
    this.s_show = "";

    /**
     * First user name.
     *
     * @get result
     * @type {string}
     */
    this.text_first_name = "";

    /**
     * Full user name.
     *
     * @get result
     * @type {string}
     */
    this.text_fullname = "";

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
    this.url_email = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Application_MemberInfoModel);

/**
 * @inheritDoc
 */
Wl_Reception_Application_MemberInfoModel.prototype.config=function()
{
    return {"a_field": {"a_info": {"get": {"result": true}},"a_items": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_full": {"get": {"get": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_visit": {"get": {"get": true}},"s_member": {"get": {"result": true}},"s_secret": {"get": {"get": true}},"s_show": {"get": {"get": true}},"text_first_name": {"get": {"result": true}},"text_fullname": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_barcode": {"get": {"result": true}},"url_email": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Reception_Application_MemberInfoModel.instanceGet
 * @param {string} k_business ID of a business to retrieve information within. 0 to retrieve system-wide version of information.
 * @param {string} uid ID of a user to retrieve member information for.
 * @param {boolean} is_full If you need to return additional information set to `true` or `false` if not.
 * @param {string} dt_date Date of the session, if we show it on the appointment info window or on the attendance list.
 * @returns {Wl_Reception_Application_MemberInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */