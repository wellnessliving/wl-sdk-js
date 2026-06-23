/**
 * Deletes the existing widget.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_SkinForeignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Skin_SkinForeignModel_a_data_specific
   * @property {boolean} is_add_lead `true` if it can be used in staff back office to add leads by staff member.
   * @property {boolean} is_redirect_self `true` if redirection after lead is captured should be done in the same tab, `false` - in a new tab.
   * @property {boolean} is_welcome_email `true` if welcome email should be sent to each added lead.
   * @property {string} k_promotion Key of the purchase option to be granted to each added lead for free.
   * @property {string} text_confirmation Confirmation text to be shown after lead is added.
   * @property {string} url_redirect URL for redirection after lead is captured.
   */

  /**
   * Data specific for the skin type.
   *
   *
   * All fields are optional and may be omitted if not needed.
   *
   * For Lead Capture widget it may contain:
   *
   * @post post
   * @put post
   * @type {Wl_Skin_SkinForeignModel_a_data_specific}
   */
  this.a_data_specific = undefined;

  /**
   * @typedef {{}} Wl_Skin_SkinForeignModel_a_fields
   * @property {boolean} is_required `true` if field should be required, `false` - optional.
   * @property {string} k_field Field key.
   */

  /**
   * Profile fields, which should be shown on the widget and if they are required or optional.
   *
   * @post post
   * @put post
   * @type {Wl_Skin_SkinForeignModel_a_fields}
   */
  this.a_fields = undefined;

  /**
   * Skin type, one of {@link RsSkinSid} constants.
   *
   * @delete get
   * @post get
   * @put get
   * @see RsSkinSid
   * @type {number}
   */
  this.id_skin = 0;

  /**
   * Key of the business.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Skin key.
   *
   * @delete result
   * @post result
   * @put result
   * @type {string}
   */
  this.k_skin = undefined;

  /**
   * Foreign skin key.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.s_foreign_id = "";

  /**
   * Name of the widget.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_name = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_SkinForeignModel);

/**
 * @inheritDoc
 */
Wl_Skin_SkinForeignModel.prototype.config=function()
{
  return {"a_field":{"a_data_specific":{"post":{"post":true},"put":{"post":true}},"a_fields":{"post":{"post":true},"put":{"post":true}},"id_skin":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_business":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_skin":{"delete":{"result":true},"post":{"result":true},"put":{"result":true}},"s_foreign_id":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"text_name":{"post":{"post":true},"put":{"post":true}}}};
};

/**
 * Deletes the existing widget.
 *
 * Permanently removes a widget skin and its foreign ID mapping from the business. Used
 * by external integrators to clean up a widget that is no longer needed.
 *
 * @function
 * @name Wl_Skin_SkinForeignModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Creates a new widget.
 *
 * Creates a new widget skin for the business and links it to an external identifier provided
 * by the integrator. The foreign ID must be unique within the business; attempting to create
 * a duplicate triggers an error directing the caller to use PUT instead.
 *
 * @function
 * @name Wl_Skin_SkinForeignModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates the existing widget.
 *
 * Updates the configuration of an existing widget skin identified by the business and
 * external foreign ID. Throws an error if no matching foreign ID is found, directing
 * the caller to use POST instead.
 *
 * @function
 * @name Wl_Skin_SkinForeignModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
