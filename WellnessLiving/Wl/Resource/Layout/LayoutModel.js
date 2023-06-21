/**
 * An endpoint that displays information about an asset layout.
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
   * @property {{}} a_image The asset's appearance information.
   * See {@link RsResourceImage::data()} for details.
   * @property {number} i_cell_x The vertical cell number. Not empty if assets are snapped to grid.
   * @property {number} i_cell_y The horizontal cell number. Not empty if assets are snapped to grid.
   * @property {number} i_left The horizontal offset in pixels. Not empty if assets aren't snapped to grid.
   * @property {number} i_top The vertical offset in pixels. Not empty if assets aren't snapped to grid.
   * @property {number} i_index Asset number.
   * @property {string} k_resource The asset key.
   * @property {string} s_name Asset name.
   * @property {string} s_title The asset title.
   */

  /**
   * The list of assets. Every element contains the following keys:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     The asset's appearance information.
   *     See {@link RsResourceImage::data()} for details.
   *   </dd>
   *   <dt>
   *     int <var>i_cell_x</var>
   *   </dt>
   *   <dd>
   *     The vertical cell number. Not empty if assets are snapped to grid.
   *   </dd>
   *   <dt>
   *     int <var>i_cell_y</var>
   *   </dt>
   *   <dd>
   *     The horizontal cell number. Not empty if assets are snapped to grid.
   *   </dd>
   *   <dt>
   *     int <var>i_left</var>
   *   </dt>
   *   <dd>
   *     The horizontal offset in pixels. Not empty if assets aren't snapped to grid.
   *   </dd>
   *   <dt>
   *     int <var>i_top</var>
   *   </dt>
   *   <dd>
   *     The vertical offset in pixels. Not empty if assets aren't snapped to grid.
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
   *     The asset key.
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
   *     The asset title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_shape_custom
   * @property {number} f_height The height for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.RECTANGLE}. Empty for other shapes.
   * @property {number} f_width The width for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.RECTANGLE}. Empty for other shapes.
   * @property {number} i_degree_from The start angle for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.PIE}. Empty for other shapes.
   * @property {number} i_degree_to The start angle for shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.PIE}. Empty for other shapes.
   * @property {number} i_left The position of the shape by horizontal axis.
   * @property {number} i_radius The radius for shapes {@link Wl_Resource_Layout_Shape_LayoutShapeSid.PIE} and
   * {@link Wl_Resource_Layout_Shape_LayoutShapeSid.CIRCLE}. Empty for other shapes.
   * @property {number} i_top The position of the shape by vertical axis.
   * @property {number} id_resource_layout_shape The shape type ID. One of the {@link Wl_Resource_Layout_Shape_LayoutShapeSid} constants.
   * @property {string} k_resource_layout_shape The shape key.
   * @property {string} s_color_background The shape's background color.
   * @property {string} s_color_foreground The shape's foreground color.
   * @property {string} s_text The shape's title.
   */

  /**
   * A list of custom shapes. Every element is an array with the following keys:
   * <dl>
   *   <dt>
   *     float <var>f_height</var>
   *   </dt>
   *   <dd>
   *     The height for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.RECTANGLE}. Empty for other shapes.
   *   </dd>
   *   <dt>
   *     float <var>f_width</var>
   *   </dt>
   *   <dd>
   *     The width for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.RECTANGLE}. Empty for other shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_degree_from</var>
   *   </dt>
   *   <dd>
   *     The start angle for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.PIE}. Empty for other shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_degree_to</var>
   *   </dt>
   *   <dd>
   *     The start angle for shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid.PIE}. Empty for other shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_left</var>
   *   </dt>
   *   <dd>
   *     The position of the shape by horizontal axis.
   *   </dd>
   *   <dt>
   *     int <var>i_radius</var>
   *   </dt>
   *   <dd>
   *     The radius for shapes {@link Wl_Resource_Layout_Shape_LayoutShapeSid.PIE} and
   *     {@link Wl_Resource_Layout_Shape_LayoutShapeSid.CIRCLE}. Empty for other shapes.
   *   </dd>
   *   <dt>
   *     int <var>i_top</var>
   *   </dt>
   *   <dd>
   *     The position of the shape by vertical axis.
   *   </dd>
   *   <dt>
   *     int <var>id_resource_layout_shape</var>
   *   </dt>
   *   <dd>
   *     The shape type ID. One of the {@link Wl_Resource_Layout_Shape_LayoutShapeSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_layout_shape</var>
   *   </dt>
   *   <dd>
   *     The shape key.
   *   </dd>
   *   <dt>
   *     string <var>s_color_background</var>
   *   </dt>
   *   <dd>
   *     The shape's background color.
   *   </dd>
   *   <dt>
   *     string <var>s_color_foreground</var>
   *   </dt>
   *   <dd>
   *     The shape's foreground color.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     The shape's title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_shape_custom[]}
   */
  this.a_shape_custom = undefined;

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_shape_icon
   * @property {number} i_cell_x The cell number, positioned by the horizontal axis. Empty if grid is turned off.
   * @property {number} i_cell_y The cell number, positioned by the vertical axis. Empty if grid is turned off.
   * @property {number} i_left The horizontal position in pixels. Empty if grid is turned on.
   * @property {number} i_top The vertical position in pixels. Empty if grid is turned on.
   * @property {number} id_shape_icon The icon ID. One of the {@link Wl_Resource_Image_ImageIconSid} constants.
   */

  /**
   * A list of shapes and icons. Every element is an array with the following keys:
   * <dl>
   *   <dt>
   *     int <var>i_cell_x</var>
   *   </dt>
   *   <dd>
   *     The cell number, positioned by the horizontal axis. Empty if grid is turned off.
   *   </dd>
   *   <dt>
   *     int <var>i_cell_y</var>
   *   </dt>
   *   <dd>
   *     The cell number, positioned by the vertical axis. Empty if grid is turned off.
   *   </dd>
   *   <dt>
   *     int <var>i_left</var>
   *   </dt>
   *   <dd>
   *     The horizontal position in pixels. Empty if grid is turned on.
   *   </dd>
   *   <dt>
   *     int <var>i_top</var>
   *   </dt>
   *   <dd>
   *     The vertical position in pixels. Empty if grid is turned on.
   *   </dd>
   *   <dt>
   *     int <var>id_shape_icon</var>
   *   </dt>
   *   <dd>
   *     The icon ID. One of the {@link Wl_Resource_Image_ImageIconSid} constants.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_shape_icon[]}
   */
  this.a_shape_icon = undefined;

  /**
   * The grid size.
   *
   * @get result
   * @type {number}
   */
  this.i_grid = undefined;

  /**
   * This will be `true` if snap to grid is enabled. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_grid = undefined;

  /**
   * The key of the layout.
   *
   * @get get
   * @type {string}
   */
  this.k_resource_layout = "0";

  /**
   * The key of the asset category.
   *
   * @get result
   * @type {string}
   */
  this.k_resource_type = undefined;

  /**
   * The color for active assets. Hex encoding with prefix `#`.
   *
   * @get result
   * @type {string}
   */
  this.s_color_active = undefined;

  /**
   * This will be `true` if asset names are displayed. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.show_name = undefined;

  /**
   * This will be `true` if asset numbers are displayed. Otherwise, this will be `false`.
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
 * @param {string} k_resource_layout The key of the layout.
 * @returns {Wl_Resource_Layout_LayoutModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */