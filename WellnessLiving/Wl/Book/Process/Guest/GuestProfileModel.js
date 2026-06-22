/**
 * Endpoint for guest account creation during "Book on behalf of guest" process.
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
   * One of the {@link Wl_Mode_ModeSid} constants. Default is {@link Wl_Mode_ModeSid.API}.
   *
   * @post post
   * @var int
   */
  this.id_mode = 0;

  /**
   * Type of the service to book. One of the {@link Wl_Service_ServiceSid} constants.
   *
   * @get get
   * @post get
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
   * Key of service to book. Depending on {@link Wl_Book_Process_Guest_GuestProfileModel.id_service} value, it can be primary key in
   * {@link \RsClassSql}, {@link \RsServiceSql} or {@link \RsResourceSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Primary key of a location.
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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Guest_GuestProfileModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Guest_GuestProfileModel.prototype.config=function()
{
  return {"a_field": {"dl_birthday": {"get": {"get": true},"post": {"get": true}},"id_mode": {"post": {"get": true}},"id_service": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_id": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true}},"text_first_name": {"get": {"get": true},"post": {"get": true}},"text_last_name": {"get": {"get": true},"post": {"get": true}},"text_mail": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"result": true},"post": {"result": true}}}};
};