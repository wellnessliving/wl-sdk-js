/**
 * Gets application resources.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_Resource_ApplicationResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Skin_Application_Resource_ApplicationResourceModel_a_application_a_resource_a_group_a_image
   * @property {string[]} a_file A list of fully qualified file names. This name is used to save files in final archive.
   * @property {boolean} can_transparent Specified if this image can have transparent pixels. `true` if it is allowed that there be transparent pixels. `false` if it is required that all pixels be opaque.
   * @property {number} i_height Required image height.
   * @property {number} i_width Required image width.
   * @property {boolean} is_require Whether this image is required.
   */

  /**
   * @typedef {{}} Wl_Skin_Application_Resource_ApplicationResourceModel_a_application_a_resource_a_group
   * @property {Wl_Skin_Application_Resource_ApplicationResourceModel_a_application_a_resource_a_group_a_image} a_image A list of images in the group. One element contains parameters of an image:
   * @property {string} s_class CSS class for this images block.
   * @property {string} text_comment Comment for images block.
   * @property {string} text_subtitle Subtitle for images block.
   * @property {string} text_title Title for images block.
   */

  /**
   * @typedef {{}} Wl_Skin_Application_Resource_ApplicationResourceModel_a_application_a_resource
   * @property {Wl_Skin_Application_Resource_ApplicationResourceModel_a_application_a_resource_a_group} a_group Groups of images, such as icons, loading screens or screenshots. One element of this array is an array that contains:
   * @property {string} text_group Title of the group.
   */

  /**
   * @typedef {{}} Wl_Skin_Application_Resource_ApplicationResourceModel_a_application
   * @property {Wl_Skin_Application_Resource_ApplicationResourceModel_a_application_a_resource} a_resource List of resource groups for image generation.
   * @property {number} i_version Application version number.
   * @property {string} k_business Business key.
   * @property {string} s_google_id Google OAuth client ID for this application.
   * @property {string} s_google_reverse Reverse Google OAuth client ID used for deep linking.
   * @property {string} s_splash_color_android Android splash screen background color in hex format.
   * @property {string} s_version_name Application version name string (for example, '2.0.1').
   * @property {string} text_annotation Short app store description.
   * @property {string} text_description Full app store description for iOS App Store.
   * @property {string} text_description_google Full app store description for Google Play.
   * @property {string} text_domain Application domain.
   * @property {string} text_keyword App store search keywords.
   * @property {string} text_name Application internal name.
   * @property {string} text_title Application display title shown in app stores.
   */

  /**
   * The application data. Key is the business key. 
   * Value is application resource data for that business.
   * Each element:
   *
   * @get result
   * @type {Wl_Skin_Application_Resource_ApplicationResourceModel_a_application[]}
   */
  this.a_application = undefined;

  /**
   * The business key.
   * Empty to get data for all businesses.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_Resource_ApplicationResourceModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_Resource_ApplicationResourceModel.prototype.config=function()
{
  return {"a_field":{"a_application":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Gets application resources.
 *
 * Returns image resource groups, version information, and Google OAuth credentials for one or
 * all White Label mobile applications. Called by the build pipeline to gather the data needed to
 * generate application source bundles. Pass a business key to restrict results to a single app.
 *
 * @function
 * @name Wl_Skin_Application_Resource_ApplicationResourceModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
