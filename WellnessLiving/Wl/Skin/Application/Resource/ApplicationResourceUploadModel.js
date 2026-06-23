/**
 * Uploads image and file assets for the given business application.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_Resource_ApplicationResourceUploadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Image assets keyed by image ID:
   *
   *
   * Each value contains array with keys that are the sanitized asset file paths (e.g. `icon_ios_Icon_60_3x_png`).
   *
   * @post post
   * @type {string}
   */
  this.a_image_upload = "";

  /**
   * Firebase Android config file (`google-services.json`).
   *
   * @post post
   * @type {string}
   */
  this.f_google_services_json = "";

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_Resource_ApplicationResourceUploadModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_Resource_ApplicationResourceUploadModel.prototype.config=function()
{
  return {"a_field":{"a_image_upload":{"post":{"post":true}},"f_google_services_json":{"post":{"post":true}},"k_business":{"post":{"post":true}}}};
};

/**
 * Uploads image and file assets for the given business application.
 *
 * Each image must be submitted as `a_image_upload[{key}]`, where `{key}` is the image ID.
 * The `google-services.json` file must be submitted as `google_services_json`.
 *
 * @function
 * @name Wl_Skin_Application_Resource_ApplicationResourceUploadModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
