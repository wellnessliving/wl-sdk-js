/**
 * Class for adding, editing, deleting sensors.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Sensor_SensorSaveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Page number.
   *
   * @post result
   * @type {number}
   */
  this.i_page = undefined;

  /**
   * Sensor type id, one of {@link SensorTypesSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_sensor_type = undefined;

  /**
   * <tt>true</tt> if editing sensor, <tt>false</tt> if adding.
   *
   * @post post
   * @type {boolean}
   */
  this.is_edit = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Old sensor ID before editing.
   *
   * @post post
   * @type {string}
   */
  this.s_old_sensor = undefined;

  /**
   * Sensor ID.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.s_sensor = undefined;

  /**
   * Sensor name.
   *
   * @post post
   * @type {string}
   */
  this.text_name = "";

  /**
   * User key.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Sensor_SensorSaveModel);

/**
 * @inheritDoc
 */
Wl_Profile_Sensor_SensorSaveModel.prototype.config=function()
{
  return {"a_field": {"i_page": {"post": {"result": true}},"id_sensor_type": {"post": {"post": true}},"is_edit": {"post": {"post": true}},"k_business": {"delete": {"get": true},"post": {"get": true}},"s_old_sensor": {"post": {"post": true}},"s_sensor": {"delete": {"get": true},"post": {"get": true}},"text_name": {"post": {"post": true}},"uid": {"delete": {"get": true},"post": {"get": true}}}};
};