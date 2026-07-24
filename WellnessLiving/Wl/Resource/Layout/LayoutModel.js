/**
 * Returns information about the specified asset layout, including assets and custom shapes.
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
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_resource_a_image_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` equals `url-view`.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage. If the original is larger than the specified dimensions, a thumbnail is created and its link is returned. Otherwise, the link to the original image is returned here.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_resource_a_image
   * @property {Wl_Resource_Layout_LayoutModel_a_resource_a_image_a_image} a_image Image data.
   * @property {number} i_angle Angle of shape rotation. Is set only if `sid_image` equals to `shape`.
   * @property {number} i_height Height of image.
   * @property {number} i_width Width of image.
   * @property {boolean} is_empty Whether is empty.
   * @property {string} k_resource Resource key.
   * @property {string} sid_image Image kind. String representation of one of {@link Wl_Resource_Image_ImageSid} constants.
   * @property {string} sid_image_icon Icon name.String representation of one of {@link Wl_Resource_Image_ImageIconSid} constants. Is set only if `sid_image` equals to `image`.
   * @property {string} sid_image_shape Shape name. String representation of one of {@link Wl_Resource_Image_ImageShapeSid} constants. Is set only if `sid_image` equals to `shape`.
   * @property {string} url Path to image.
   */

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_resource
   * @property {Wl_Resource_Layout_LayoutModel_a_resource_a_image} a_image The asset's appearance information.
   * @property {number} i_cell_x The vertical cell number. Not empty if assets are snapped to grid.
   * @property {number} i_cell_y The horizontal cell number. Not empty if assets are snapped to grid.
   * @property {number} i_index Asset number.
   * @property {number} i_left The horizontal offset in pixels. Not empty if assets aren't snapped to grid.
   * @property {number} i_top The vertical offset in pixels. Not empty if assets aren't snapped to grid.
   * @property {string} k_resource The asset key.
   * @property {string} s_name Asset name.
   * @property {string} s_title The asset title.
   */

  /**
   * The list of assets. Every element contains the following keys:
   *
   * @get result
   * @type {Wl_Resource_Layout_LayoutModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Resource_Layout_LayoutModel_a_shape_custom
   * @property {number} f_height The height for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid}. Empty for other shapes.
   * @property {number} f_width The width for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid}. Empty for other shapes.
   * @property {number} i_degree_from The start angle for the shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid}. Empty for other shapes.
   * @property {number} i_degree_to The start angle for shape {@link Wl_Resource_Layout_Shape_LayoutShapeSid}. Empty for other shapes.
   * @property {number} i_left The position of the shape by horizontal axis.
   * @property {number} i_radius The radius for shapes {@link Wl_Resource_Layout_Shape_LayoutShapeSid} and {@link Wl_Resource_Layout_Shape_LayoutShapeSid}. Empty for other shapes.
   * @property {number} i_top The position of the shape by vertical axis.
   * @property {number} id_resource_layout_shape The shape type ID. One of the {@link Wl_Resource_Layout_Shape_LayoutShapeSid} constants.
   * @property {string} k_resource_layout_shape The shape key.
   * @property {string} s_color_background The shape's background color.
   * @property {string} s_color_foreground The shape's foreground color.
   * @property {string} s_text The shape's title.
   */

  /**
   * A list of custom shapes. Every element is an array with the following keys:
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
  this.k_resource_layout = "";

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
  return {"a_field":{"a_resource":{"get":{"result":true}},"a_shape_custom":{"get":{"result":true}},"a_shape_icon":{"get":{"result":true}},"i_grid":{"get":{"result":true}},"is_grid":{"get":{"result":true}},"k_resource_layout":{"get":{"get":true}},"k_resource_type":{"get":{"result":true}},"s_color_active":{"get":{"result":true}},"show_name":{"get":{"result":true}},"show_number":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Resource_Layout_LayoutModel.instanceGet
 * @param {string} k_resource_layout The key of the layout.
 * @returns {Wl_Resource_Layout_LayoutModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about the specified asset layout, including assets and custom shapes.
 *
 * Returns the full layout configuration including the asset list with positions and images, custom shapes with
 * coordinates and colors, and display settings such as grid dimensions and number visibility.
 *
 * @function
 * @name Wl_Resource_Layout_LayoutModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
