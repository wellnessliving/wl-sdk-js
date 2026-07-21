/**
 * Saves text metadata for the given business application.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_Resource_ApplicationResourceMaterialModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Code version.
   *
   * @post post
   * @type {number}
   */
  this.i_version = 1;

  /**
   * Application category in the store.
   * One of {@link Wl_Skin_Application_Resource_ApplicationCategorySid} constants.
   * `0` if no category is selected.
   *
   * @post post
   * @see Wl_Skin_Application_Resource_ApplicationCategorySid
   * @type {number}
   */
  this.id_category = 0;

  /**
   * Type of application update.
   * One of {@link Wl_Skin_Application_Upgrade_AppUpdateTypeEnum} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_version_change = 1;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Reversed client ID of the iOS application on Firebase.
   *
   * @post post
   * @type {string}
   */
  this.s_firebase_ios = "";

  /**
   * Android splash screen background color in hex format.
   *
   * @post post
   * @type {string}
   */
  this.s_splash_color_android = "";

  /**
   * Version name for the App Store and Google Play builds.
   *
   * @post post
   * @type {string}
   */
  this.s_version_name = "2.0.1";

  /**
   * Short application description in the store (up to 80 characters).
   *
   * @post post
   * @type {string}
   */
  this.text_annotation = "";

  /**
   * Available countries for application distribution (comma-separated list).
   *
   * @post post
   * @type {string}
   */
  this.text_country = "";

  /**
   * Full application description in the store.
   *
   * @post post
   * @type {string}
   */
  this.text_description = "";

  /**
   * Full application description specific to Google Play.
   * If empty, `text_description` is used for Google Play as well.
   *
   * @post post
   * @type {string}
   */
  this.text_description_google = "";

  /**
   * Bundle ID / package name (e.g. `com.fitness.studio`).
   *
   * @post post
   * @type {string}
   */
  this.text_domain = "";

  /**
   * Support email address shown in the store listing.
   *
   * @post post
   * @type {string}
   */
  this.text_email = "";

  /**
   * Additional information about the application build.
   *
   * @post post
   * @type {string}
   */
  this.text_information = "";

  /**
   * App Store search keywords (comma-separated).
   *
   * @post post
   * @type {string}
   */
  this.text_keyword = "";

  /**
   * Application name shown on the device home screen.
   *
   * @post post
   * @type {string}
   */
  this.text_name = "";

  /**
   * Support phone number shown in the store listing.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * Application title in the App Store listing.
   *
   * @post post
   * @type {string}
   */
  this.text_title = "";

  /**
   * Support website URL shown in the store listing.
   *
   * @post post
   * @type {string}
   */
  this.text_website = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_Resource_ApplicationResourceMaterialModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_Resource_ApplicationResourceMaterialModel.prototype.config=function()
{
  return {"a_field":{"i_version":{"post":{"post":true}},"id_category":{"post":{"post":true}},"id_version_change":{"post":{"post":true}},"k_business":{"post":{"post":true}},"s_firebase_ios":{"post":{"post":true}},"s_splash_color_android":{"post":{"post":true}},"s_version_name":{"post":{"post":true}},"text_annotation":{"post":{"post":true}},"text_country":{"post":{"post":true}},"text_description":{"post":{"post":true}},"text_description_google":{"post":{"post":true}},"text_domain":{"post":{"post":true}},"text_email":{"post":{"post":true}},"text_information":{"post":{"post":true}},"text_keyword":{"post":{"post":true}},"text_name":{"post":{"post":true}},"text_phone":{"post":{"post":true}},"text_title":{"post":{"post":true}},"text_website":{"post":{"post":true}}}};
};

/**
 * Saves text metadata for the given business application.
 *
 * Persists all text fields of the Client App Materials form (store listing copy, contact details,
 * privacy policy URL, etc.) for the specified business. File assets such as icons and screenshots
 * are submitted separately via {@link Wl_Skin_Application_Resource_ApplicationResourceUploadModel}. Requires the App Build
 * Automation edit privilege.
 *
 * @function
 * @name Wl_Skin_Application_Resource_ApplicationResourceMaterialModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
