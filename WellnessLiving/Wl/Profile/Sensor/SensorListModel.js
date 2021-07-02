/**
 * Class for getting sensors list data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Sensor_SensorListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Profile_Sensor_SensorListModel_a_page
   * @property {number} page Page number.
   * @property {boolean} [is_selected] Whether the page is current.
   * @property {boolean} [is_previous] Whether the page is previous.
   * @property {boolean} [is_next] Whether the page is next.
   * @property {string} onclick Code to execute after button is clicked.
   */

  /**
   * <tt>false</tt> if no pages present or pagination data with structure:
   * <dl>
   *   <dt>
   *     int <var>page</var>
   *   </dt>
   *   <dd>
   *     Page number.
   *   </dd>
   *   <dt>
   *     bool <var>[is_selected]</var>
   *   </dt>
   *   <dd>
   *     Whether the page is current.
   *   </dd>
   *   <dt>
   *     bool <var>[is_previous]</var>
   *   </dt>
   *   <dd>
   *     Whether the page is previous.
   *   </dd>
   *   <dt>
   *     bool <var>[is_next]</var>
   *   </dt>
   *   <dd>
   *     Whether the page is next.
   *   </dd>
   *   <dt>
   *     string <var>onclick</var>
   *   </dt>
   *   <dd>
   *     Code to execute after button is clicked.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Sensor_SensorListModel_a_page[]}
   */
  this.a_page = undefined;

  /**
   * @typedef {{}} Wl_Profile_Sensor_SensorListModel_a_sensor_a_class_menu
   * @property {string} s_id ID of the current button.
   * @property {string} s_class Class for current button.
   * @property {string} s_onclick Code to execute on button click.
   * @property {string} s_title Button title.
   */
  /**
   * @typedef {{}} Wl_Profile_Sensor_SensorListModel_a_sensor
   * @property {Wl_Profile_Sensor_SensorListModel_a_sensor_a_class_menu} a_class_menu Menu data with structure:
   * <dl>
   *   <dt>
   *     string <tt>s_id</tt>
   *   </dt>
   *   <dd>
   *     ID of the current button.
   *   </dd>
   *   <dt>
   *     string <tt>s_class</tt>
   *   </dt>
   *   <dd>
   *     Class for current button.
   *   </dd>
   *   <dt>
   *     string <tt>s_onclick</tt>
   *   </dt>
   *   <dd>
   *     Code to execute on button click.
   *   </dd>
   *   <dt>
   *     string <tt>s_title</tt>
   *   </dt>
   *   <dd>
   *     Button title.
   *   </dd>
   * </dl>
   * @property {string} s_sensor Sensor id.
   * @property {string} s_id_sensor Id name for sensor menu button.
   * @property {string} text_name Sensor name.
   */

  /**
   * Sensors data with structure:
   * <dl>
   *   <dt>
   *     array <var>a_class_menu</var>
   *   </dt>
   *   <dd>
   *     Menu data with structure:
   *     <dl>
   *       <dt>
   *         string <var>s_id</var>
   *       </dt>
   *       <dd>
   *         ID of the current button.
   *       </dd>
   *       <dt>
   *         string <var>s_class</var>
   *       </dt>
   *       <dd>
   *         Class for current button.
   *       </dd>
   *       <dt>
   *         string <var>s_onclick</var>
   *       </dt>
   *       <dd>
   *         Code to execute on button click.
   *       </dd>
   *       <dt>
   *         string <var>s_title</var>
   *       </dt>
   *       <dd>
   *         Button title.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>s_sensor</var>
   *   </dt>
   *   <dd>
   *     Sensor id.
   *   </dd>
   *   <dt>
   *     string <var>s_id_sensor</var>
   *   </dt>
   *   <dd>
   *     Id name for sensor menu button.
   *   </dd>
   *   <dt>
   *     string <var>text_name</var>
   *   </dt>
   *   <dd>
   *     Sensor name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Sensor_SensorListModel_a_sensor[]}
   */
  this.a_sensor = undefined;

  /**
   * Current page number.
   *
   * @get result
   * @type {number}
   */
  this.i_current_page = undefined;

  /**
   * Page to display.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get,result
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User key. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get,result
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Sensor_SensorListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Sensor_SensorListModel.prototype.config=function()
{
  return {"a_field": {"a_page": {"get": {"result": true}},"a_sensor": {"get": {"result": true}},"i_current_page": {"get": {"result": true}},"i_page": {"get": {"get": true}},"k_business": {"get": {"get": true,"result": true}},"uid": {"get": {"get": true,"result": true}}}};
};