/**
 * Retrieves a list of business types.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Type_BusinessTypeListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Type_BusinessTypeListModel_a_business_type_a_image_list
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is_resize Whether thumbnail is a resized variant of original image.
   *  If set to `false`, value returned in <tt>url_thumbnail</tt> equals value in <tt>url_view</tt>.
   * @property {string} url_thumbnail Url to resized and rotated image in file storage.
   *  If size of original image is larger than specified by arguments, image thumbnail as created,
   *  and a link to this thumbnail is returned. Otherwise, link to original image is returned here.
   * @property {string} url_view Url to original image in file storage.
   */
  /**
   * @typedef {{}} Wl_Business_Type_BusinessTypeListModel_a_business_type
   * @property {Wl_Business_Type_BusinessTypeListModel_a_business_type_a_image_list} a_image_list Images list for business types. Each element has the next structure:<dl>
   *    <dt>int <tt>i_height</tt></dt>
   *    <dd>Actual height of thumbnail image.</dd>
   *    <dt>int <tt>i_height_src</tt></dt>
   *    <dd>Height of original image.</dd>
   *    <dt>int <tt>i_rotate</tt></dt>
   *    <dd>Angle on which image was rotated compared to the original.</dd>
   *    <dt>int <tt>i_width</tt></dt>
   *    <dd>Actual width of thumbnail image.</dd>
   *    <dt>int <tt>i_width_src</tt></dt>
   *    <dd>Width of original image.</dd>
   *    <dt>bool <tt>is_resize</tt></dt>
   *    <dd>Whether thumbnail is a resized variant of original image.
   *  If set to `false`, value returned in <tt>url_thumbnail</tt> equals value in <tt>url_view</tt>.</dd>
   *    <dt>string <tt>url_thumbnail</tt></dt>
   *    <dd>Url to resized and rotated image in file storage.
   *  If size of original image is larger than specified by arguments, image thumbnail as created,
   *  and a link to this thumbnail is returned. Otherwise, link to original image is returned here.</dd>
   *    <dt>string <tt>url_view</tt></dt>
   *    <dd>Url to original image in file storage.</dd>
   *  </dl>
   * @property {number} id_business_category The business category. One of the {@link Wl_Business_BusinessCategorySid} constants.
   * @property {number} id_tour Type of the demo tour on the sales site connected to the business type. More about tours: {@link Wl_WlHomeTourSid}.
   * @property {string} k_business_type The key of business type.
   * @property {string} text_category The title of the business category.
   * @property {string} text_file System name of the business type.
   * @property {string} text_title The title of business type.
   */

  /**
   * A list of business types. Each element has the next structure: <dl>
   *  <dt>array <var>a_image_list</var></dt>
   *  <dd>Images list for business types. Each element has the next structure:<dl>
   *    <dt>int <var>i_height</var></dt>
   *    <dd>Actual height of thumbnail image.</dd>
   *    <dt>int <var>i_height_src</var></dt>
   *    <dd>Height of original image.</dd>
   *    <dt>int <var>i_rotate</var></dt>
   *    <dd>Angle on which image was rotated compared to the original.</dd>
   *    <dt>int <var>i_width</var></dt>
   *    <dd>Actual width of thumbnail image.</dd>
   *    <dt>int <var>i_width_src</var></dt>
   *    <dd>Width of original image.</dd>
   *    <dt>bool <var>is_resize</var></dt>
   *    <dd>Whether thumbnail is a resized variant of original image.
   *      If set to `false`, value returned in <var>url_thumbnail</var> equals value in <var>url_view</var>.</dd>
   *    <dt>string <var>url_thumbnail</var></dt>
   *    <dd>Url to resized and rotated image in file storage.
   *      If size of original image is larger than specified by arguments, image thumbnail as created,
   *      and a link to this thumbnail is returned. Otherwise, link to original image is returned here.</dd>
   *    <dt>string <var>url_view</var></dt>
   *    <dd>Url to original image in file storage.</dd>
   *  </dl></dd>
   *  <dt>int <var>id_business_category</var></dt>
   *  <dd>The business category. One of the {@link Wl_Business_BusinessCategorySid} constants.</dd>
   *  <dt>int <var>id_tour</var></dt>
   *  <dd>Type of the demo tour on the sales site connected to the business type. More about tours: {@link Wl_WlHomeTourSid}.</dd>
   *  <dt>string <var>k_business_type</var></dt>
   *  <dd>The key of business type.</dd>
   *  <dt>string <var>text_category</var></dt>
   *  <dd>The title of the business category.</dd>
   *  <dt>string <var>text_file</var></dt>
   *  <dd>System name of the business type.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>The title of business type.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Type_BusinessTypeListModel_a_business_type[]}
   */
  this.a_business_type = [];

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Type_BusinessTypeListModel);

/**
 * @inheritDoc
 */
Wl_Business_Type_BusinessTypeListModel.prototype.config=function()
{
  return {"a_field": {"a_business_type": {"get": {"result": true}}}};
};