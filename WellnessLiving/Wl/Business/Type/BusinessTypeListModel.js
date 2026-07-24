/**
 * Returns the list of available business types with their categories and images.
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
   * @property {boolean} is_resize Whether thumbnail is a resized variant of original image.  If set to `false`, value returned in `url_thumbnail` equals value in `url_view`.
   * @property {string} url_thumbnail Url to resized and rotated image in file storage.  If size of original image is larger than specified by arguments, image thumbnail as created,  and a link to this thumbnail is returned. Otherwise, link to original image is returned here.
   * @property {string} url_view Url to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Business_Type_BusinessTypeListModel_a_business_type
   * @property {Wl_Business_Type_BusinessTypeListModel_a_business_type_a_image_list} a_image_list Images list for business types. Each element has the next structure:
   * @property {number} id_business_category The business category. One of the {@link RsBusinessCategorySid} constants.
   * @property {?number} id_tour Type of the demo tour on the sales site connected to the business type. More about tours: {@link RsHomeTourSid}.
   * @property {string} k_business_type The key of business type.
   * @property {string} text_category The title of the business category.
   * @property {string} text_category_description The description of the business category.
   * @property {string} text_category_icon The icon of the business category.
   * @property {string} text_file System name of the business type.
   * @property {string} text_title The title of business type.
   */

  /**
   * A list of business types. Each element has the next structure:
   *
   * @get result
   * @type {Wl_Business_Type_BusinessTypeListModel_a_business_type[]}
   */
  this.a_business_type = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Type_BusinessTypeListModel);

/**
 * @inheritDoc
 */
Wl_Business_Type_BusinessTypeListModel.prototype.config=function()
{
  return {"a_field":{"a_business_type":{"get":{"result":true}}}};
};

/**
 * Returns the list of available business types with their categories and images.
 *
 * Used during the new business signup flow so the prospective client can select the type of business
 * they are opening (e.g., yoga studio, gym, spa). The list drives both the type picker UI and the
 * selection of the appropriate demo tour to show on the marketing site.
 *
 * @function
 * @name Wl_Business_Type_BusinessTypeListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
