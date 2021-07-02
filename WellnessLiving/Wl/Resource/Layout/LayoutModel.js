/**
 * Information about asset layout.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_Layout_LayoutModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_resource_layout";

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_resource
   * @property {{}} a_image Information about asset view. See {@link \RsResourceImage::data()} for details.
   * @property {number} i_cell_x Number of cell. Position by horizontal axis. Empty if grid is turned off.
   * @property {number} i_cell_y Number of cell. Position by vertical axis. Empty if grid is turned off.
   * @property {number} i_left Horizontal position in pixels. Empty if grid is turned on.
   * @property {number} i_top Vertical position in pixels. Empty if grid is turned on.
   * @property {number} i_index Asset number.
   * @property {string} k_resource Asset ID.
   * @property {string} s_name Asset name.
   * @property {string} s_title Asset title.
   */

  /**
   * List of assets. Every element - array with keys:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Information about asset view. See {@link \RsResourceImage::data()} for details.
   *   </dd>
   *   <dt>
   *     int <var>i_cell_x</var>
   *   </dt>
   *   <dd>
   *     Number of cell. Position by horizontal axis. Empty if grid is turned off.
   *   </dd>
   *   <dt>
   *     int <var>i_cell_y</var>
   *   </dt>
   *   <dd>
   *     Number of cell. Position by vertical axis. Empty if grid is turned off.
   *   </dd>
   *   <dt>
   *     int <var>i_left</var>
   *   </dt>
   *   <dd>
   *     Horizontal position in pixels. Empty if grid is turned on.
   *   </dd>
   *   <dt>
   *     int <var>i_top</var>
   *   </dt>
   *   <dd>
   *     Vertical position in pixels. Empty if grid is turned on.
   *   </dd>
   *   <dt>
   *     int <var>i_index</var>
   *   </dt>
   *   <dd>
   *     Asset number.
   *   </dd>
   *   <dt>
   *     string <var>k_resource</var>
   *   </dt>
   *   <dd>
   *     Asset ID.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     Asset name.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Asset title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_shape_custom
   * @property {number} f_height Height for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::RECTANGLE}. Empty for another shapes.
   * @property {number} f_width Width for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::RECTANGLE}. Empty for another shapes.
   * @property {number} i_degree_from Start angle for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::PIE}. Empty for another shapes.
   * @property {number} i_degree_to End angle for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::PIE}. Empty for another shapes.
   * @property {number} i_left Position of shape by horizontal axis.
   * @property {number} i_radius Radius for shapes {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::PIE} and {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::CIRCLE}. Empty for another shapes.
   * @property {number} i_top Position of shape by vertical axis.
   * @property {number} id_resource_layout_shape Shape type. One of {@link \Wl\Resource\Layout\Shape\LayoutShapeSid} constants.
   * @property {string} k_resource_layout_shape Shape ID. Primary key in {@link \Wl\Resource\Layout\Shape\Sql} table.
   * @property {string} s_color_background Shape background color.
   * @property {string} s_color_foreground Shape foreground color.
   * @property {string} s_text Shape title.
   */

  /**
   * List of custom shapes. Every element - array with keys:
   * <dl>
   *   <dt>
   *     float <var>f_height</var>
   *   </dt>
   *   <dd>
   *     Height for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::RECTANGLE}. Empty for another shapes.
   *   </dd>
   *   <dt>
   *     float <var>f_width</var>
   *   </dt>
   *   <dd>
   *     Width for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::RECTANGLE}. Empty for another shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_degree_from</var>
   *   </dt>
   *   <dd>
   *     Start angle for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::PIE}. Empty for another shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_degree_to</var>
   *   </dt>
   *   <dd>
   *     End angle for shape {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::PIE}. Empty for another shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_left</var>
   *   </dt>
   *   <dd>
   *     Position of shape by horizontal axis.
   *   </dd>
   *   <dt>
   *     int <var>i_radius</var>
   *   </dt>
   *   <dd>
   *     Radius for shapes {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::PIE} and {@link \Wl\Resource\Layout\Shape\LayoutShapeSid::CIRCLE}. Empty for another shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_top</var>
   *   </dt>
   *   <dd>
   *     Position of shape by vertical axis.
   *   </dd>
   *   <dt>
   *     int <var>id_resource_layout_shape</var>
   *   </dt>
   *   <dd>
   *     Shape type. One of {@link \Wl\Resource\Layout\Shape\LayoutShapeSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_layout_shape</var>
   *   </dt>
   *   <dd>
   *     Shape ID. Primary key in {@link \Wl\Resource\Layout\Shape\Sql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_color_background</var>
   *   </dt>
   *   <dd>
   *     Shape background color.
   *   </dd>
   *   <dt>
   *     string <var>s_color_foreground</var>
   *   </dt>
   *   <dd>
   *     Shape foreground color.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     Shape title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_shape_custom[]}
   */
  this.a_shape_custom = undefined;

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_shape_icon
   * @property {number} i_cell_x Number of cell. Position by horizontal axis. Empty if grid is turned off.
   * @property {number} i_cell_y Number of cell. Position by vertical axis. Empty if grid is turned off.
   * @property {number} i_left Horizontal position in pixels. Empty if grid is turned on.
   * @property {number} i_top Vertical position in pixels. Empty if grid is turned on.
   * @property {number} id_shape_icon Icon ID. One of constants {@link \Wl\Resource\Image\ImageIconSid}.
   */

  /**
   * List of shapes-icons. Every element - array with keys:
   * <dl>
   *   <dt>
   *     int <var>i_cell_x</var>
   *   </dt>
   *   <dd>
   *     Number of cell. Position by horizontal axis. Empty if grid is turned off.
   *   </dd>
   *   <dt>
   *     int <var>i_cell_y</var>
   *   </dt>
   *   <dd>
   *     Number of cell. Position by vertical axis. Empty if grid is turned off.
   *   </dd>
   *   <dt>
   *     int <var>i_left</var>
   *   </dt>
   *   <dd>
   *     Horizontal position in pixels. Empty if grid is turned on.
   *   </dd>
   *   <dt>
   *     int <var>i_top</var>
   *   </dt>
   *   <dd>
   *     Vertical position in pixels. Empty if grid is turned on.
   *   </dd>
   *   <dt>
   *     int <var>id_shape_icon</var>
   *   </dt>
   *   <dd>
   *     Icon ID. One of constants {@link \Wl\Resource\Image\ImageIconSid}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_shape_icon[]}
   */
  this.a_shape_icon = undefined;

  /**
   * Grid spacing. Empty if <var>is_grid</var> empty.
   *
   * @get result
   * @type {number}
   */
  this.i_grid = undefined;

  /**
   * <tt>true</tt> - grid of turned on; <tt>false</tt> - is turned off.
   *
   * @get result
   * @type {boolean}
   */
  this.is_grid = undefined;

  /**
   * ID of layout.
   *
   * @get get
   * @type {string}
   */
  this.k_resource_layout = "0";

  /**
   * Asset category ID. Primary key in table {@link RsResourceTypeSql}.
   *
   * @get result
   * @type {string}
   */
  this.k_resource_type = undefined;

  /**
   * Color for active assets. Hex encoding with prefix <tt>#</tt>.
   *
   * @get result
   * @type {string}
   */
  this.s_color_active = undefined;

  /**
   * <tt>true</tt> - show asset names; <tt>false</tt> - hide names.
   *
   * @get result
   * @type {boolean}
   */
  this.show_name = undefined;

  /**
   * <tt>true</tt> - show asset numbers; <tt>false</tt> - hide numbers.
   *
   * @get result
   * @type {boolean}
   */
  this.show_number = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Layout_LayoutModel);

/**
 * @inheritDoc
 */
Wl_Resource_Layout_LayoutModel.prototype.config=function()
{
  return {"a_field": {"a_resource": {"get": {"result": true}},"a_shape_custom": {"get": {"result": true}},"a_shape_icon": {"get": {"result": true}},"i_grid": {"get": {"result": true}},"is_grid": {"get": {"result": true}},"k_resource_layout": {"get": {"get": true}},"k_resource_type": {"get": {"result": true}},"s_color_active": {"get": {"result": true}},"show_name": {"get": {"result": true}},"show_number": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Resource_Layout_LayoutModel.instanceGet
 * @param {string} k_resource_layout ID of layout.
 * @returns {Wl_Resource_Layout_LayoutModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */