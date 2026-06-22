/**
 * Point to add, edit or delete client's task.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Edit_EditModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * List of staff member's keys assigned to task.
     *
     * Empty array means not set.
     *
     * @get result
     * @post post
     * @type {{}}
     */
    this.a_staff = [];

    /**
     * Due date.
     *
     * @get result
     * @post post
     * @type {string}
     */
    this.dl_due = "";

    /**
     * Task status.
     *
     * `null` means not set.
     *
     * @get result
     * @post post
     * @put post
     * @type {?number}
     */
    this.id_task_status = null;

    /**
     * Business key.
     *
     * `null` means not set.
     *
     * @delete get
     * @get get
     * @post get
     * @put get
     * @type {?string}
     */
    this.k_business = null;

    /**
     * Location key.
     *
     * `null` means not set.
     *
     * @get result
     * @post post
     * @type {?string}
     */
    this.k_location = null;

    /**
     * Task key.
     *
     * `null` means not set.
     *
     * @delete get
     * @get get
     * @post get,result
     * @put get
     * @type {?string}
     */
    this.k_task = null;

    /**
     * Task title.
     *
     * @get result
     * @post post
     * @type {string}
     */
    this.text_title = "";

    /**
     * Due time.
     *
     * @get result
     * @post post
     * @type {string}
     */
    this.tl_due = "";

    /**
     * Client's uid for whom connected task.
     *
     * `null` means not set.
     *
     * @get result
     * @post post
     * @type {?string}
     */
    this.uid = null;

    /**
     * Task description.
     *
     * @get result
     * @post post
     * @type {string}
     */
    this.xml_description = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Staff_StaffElementModel);

/**
 * @inheritDoc
 */
Wl_Task_Edit_EditModel.prototype.config = function()
{
    return {"a_field": {"a_staff": {"get": {"result": true},"post": {"post": true}},"dl_due": {"get": {"result": true},"post": {"post": true}},"id_task_status": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_location": {"get": {"result": true},"post": {"post": true}},"k_task": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"tl_due": {"get": {"result": true},"post": {"post": true}},"uid": {"get": {"result": true},"post": {"post": true}},"xml_description": {"get": {"result": true},"post": {"post": true}}}};
};