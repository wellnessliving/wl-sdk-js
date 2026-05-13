/**
 * Point to clock in/out by a staff member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Staff\Load\Load74Api
 */
function Wl_Staff_Load_Load74Model()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @inheritDoc
     */
    this._s_key = "k_business,uid_staff";

    /**
     * @inheritDoc
     */
    this.ERROR_SILENT = true;

    /**
     * Staff pay rates info. See {@link Wl\Staff\PayRate\PayRate::staffHourlyCheckInRateGet()}.
     *
     * @get result
     * @type {{}}
     */
    this.a_pay_rate = [];

    /**
     * Staff work information. See {@link Wl\Staff\Load\rs_staff_load_check_work_trx()}.
     *
     * @get result
     * @put result
     * @type {{}}
     */
    this.a_work = [];

    /**
     * <tt>true</tt> if staff member has been clocked in; <tt>false</tt> if clocked out.
     *
     * @put result
     * @type {boolean}
     */
    this.is_start = undefined;

    /**
     * Whether staff member can manage staff clock in/out for other staff members.
     *
     * @get result
     * @type {boolean}
     */
    this.is_time_manage = false;

    /**
     * Business in which information about the staff load will be requested.
     *
     * @get get
     * @put get
     * @type {string}
     */
    this.k_business = "0";

    /**
     * Location primary key.
     *
     * @put post
     * @type {?string}
     */
    this.k_location = null;

    /**
     * Pay rate identifier.
     *
     * @put post
     * @type {string}
     */
    this.k_staff_pay = "0";

    /**
     * Message, when the work has been started.
     *
     * @get result
     * @type {string}
     */
    this.text_work_start = "";

    /**
     * The staff user key
     *
     * @get get
     * @put get
     * @type {string}
     */
    this.uid_staff = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Staff_Load_Load74Model);

/**
 * @inheritDoc
 */
Wl_Staff_Load_Load74Model.prototype.config=function()
{
    return {"a_field": {"a_pay_rate": {"get": {"result": true}},"a_work": {"get": {"result": true},"put": {"result": true}},"is_start": {"put": {"result": true}},"is_time_manage": {"get": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_location": {"put": {"post": true}},"k_staff_pay": {"put": {"post": true}},"text_work_start": {"get": {"result": true}},"uid_staff": {"get": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_Load_Load74Model.instanceGet
 * @param {string} k_business Business in which information about the staff load will be requested.
 * @param {string} uid_staff Staff uid.
 * @returns {Wl_Staff_Load_Load74Model}
 * @see Core_Spa_Model.instanceGet()
 */
