/**
 * Gets information necessary to display "Lead capture" widget.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_LeadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_field_data
   * @property {string} k_city City key.
   * @property {string} text_address Address.
   * @property {string} text_postal Postal code.
   */

  /**
   * A list of fields containing the lead information.
   * The keys are the field keys and values are field values.
   *
   * If field key is `Address` field key, value may be an array or string.
   * Can be a string if only address field is used. Will be an array if city and postal code are used,
   * with the following keys:
   *
   * @post post
   * @type {Wl_Lead_LeadModel_a_field_data[]}
   */
  this.a_field_data = undefined;

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_field_list_a_item
   * @property {string} s_id The option ID.
   * @property {string} text_title The option title.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_field_list
   * @property {Wl_Lead_LeadModel_a_field_list_a_item} a_item A list of possible options for an HTML select field. This value is only used if this field is an HTML select. Every element has the following keys:
   * @property {number} id_field_general List of general fields in user's profile.
   * @property {number} id_field_type Possible types of the custom fields: text, checkbox, radio buttons, etc.
   * @property {boolean} is_require If `true`, then the field is mandatory. If `false`, then the field isn't mandatory.
   * @property {string} k_field The field key.
   * @property {string} text_field The field title.
   */

  /**
   * A list of profile fields in the business. Every element has the following keys:
   *
   * @get result
   * @type {Wl_Lead_LeadModel_a_field_list[]}
   */
  this.a_field_list = undefined;

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_a_style
   * @property {string} s_style Compiled CSS style block string.
   * @property {string} s_value_name Name of the skin value this style block belongs to.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_background
   * @property {string} class CSS class names to apply to the element.
   * @property {string} css Inline CSS style string to apply to the element.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_field-font
   * @property {string} class CSS class names to apply to the element.
   * @property {string} css Inline CSS style string to apply to the element.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_header-text
   * @property {string} class CSS class names to apply to the element.
   * @property {string} css Inline CSS style string to apply to the element.
   * @property {string} text Header text content.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_info-show
   * @property {boolean[]} a_require Map of required element names. Keys are element names, values are `true`.
   * @property {boolean[]} a_show Map of visible element names. Keys are element names, values are `true`.
   * @property {boolean} empty `true` if no elements are visible.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_submit-background
   * @property {string} class CSS class names to apply to the element.
   * @property {string} css Inline CSS style string to apply to the element.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_submit-font
   * @property {string} class CSS class names to apply to the element.
   * @property {string} css Inline CSS style string to apply to the element.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin_submit-text
   * @property {string} class CSS class names to apply to the element.
   * @property {string} css Inline CSS style string to apply to the element.
   * @property {string} text Submit button text content.
   */

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin
   * @property {Wl_Lead_LeadModel_a_skin_a_style} a_style List of compiled CSS style blocks. Each element:
   * @property {Wl_Lead_LeadModel_a_skin_background} background Background styling for the widget container:
   * @property {Wl_Lead_LeadModel_a_skin_field-font} field-font Font styling for form fields:
   * @property {Wl_Lead_LeadModel_a_skin_header-text} header-text Header section settings:
   * @property {Wl_Lead_LeadModel_a_skin_info-show} info-show Visibility settings for information elements:
   * @property {Wl_Lead_LeadModel_a_skin_submit-background} submit-background Background styling for the submit button:
   * @property {Wl_Lead_LeadModel_a_skin_submit-font} submit-font Font styling for the submit button:
   * @property {Wl_Lead_LeadModel_a_skin_submit-text} submit-text Text settings for the submit button:
   */

  /**
   * The skin configuration:
   *
   * @get result
   * @type {Wl_Lead_LeadModel_a_skin}
   */
  this.a_skin = undefined;

  /**
   * Whether it is possible to give free promotion when adding a user (only if free promotion is configured in the widget).
   * `true` or `null` if it is possible, `false` if not.
   * `null` used for backward compatibility.
   *
   * @get result
   * @post get
   * @type {?boolean}
   */
  this.can_use_free_purchase = null;

  /**
   * This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   *
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` if newly created lead should be automatically signed in, `false` otherwise.
   *
   * Lead will not be signed in if:
   * - email is used already for another existing user;
   * - different user is signed in already (can be changed with `is_sing_in_force`).
   *
   * If lead is not signed in, then `text_sign_in_error` will contain an error message.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sing_in = false;

  /**
   * `true` if newly created lead should be automatically signed in instead of the currently signed-in user,
   * `false` if currently singed-in user should not be signed out.
   * If lead is not signed in, then `text_sign_in_error` will contain an error message.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sing_in_force = false;

  /**
   * The key of business to which the new user must be captured.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead source.
   *
   * Must be `null` if `text_lead_source` is set.
   * If both parameters are empty, the {@link Wl_Mode_ModeSid} lead source will be used.
   *
   * `LEAD_SOURCE_REPLACE_NONE` if Lead Source is to be unselected for the user.
   *
   * @post post,result
   * @type {?string}
   */
  this.k_lead_source = null;

  /**
   * The key of the widget skin. If left empty, then the default skin is used.
   * This will be the Lead Capture widget skin with "Use this widget for the Add Lead form" selected.
   * If your business doesn't have a skin selected, this endpoint will default to the system-wide default,
   * which may lack fields your business requires when adding a lead or a client.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_skin = "";

  /**
   * The characters entered by the lead for the captcha test.
   * This isn't necessary if the GET method returned an empty `url_captcha`.
   * This field isn't necessary if the GET method returned an empty `url_captcha`.
   *
   * @post post
   * @type {string}
   */
  this.s_captcha = "";

  /**
   * Lead source title.
   *
   * A new lead source will be created if it does not exist.
   * Must be `null` if `k_lead_source` is set.
   * If both parameters are empty, the {@link Wl_Mode_ModeSid} lead source will be used.
   *
   * @post post
   * @type {?string}
   */
  this.text_lead_source = null;

  /**
   * An error code if the lead is not signed in after creation.
   * This field is filled in the POST method.
   *
   * Possible values:
   * - `email-exists` - the email is already used by another lead;
   * - `different-user` - another user is signed in already.
   *
   * @post result
   * @type {string}
   */
  this.text_sign_in_error = undefined;

  /**
   * The key of the new user.
   *
   * Typing is not added because the variable is an integer.
   * Specifying typing may break third party integration.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * The URL to load the image with a captcha test.
   * This string is empty if it's not necessary to pass a captcha test.
   *
   * @get result
   * @type {string}
   */
  this.url_captcha = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_LeadModel);

/**
 * @inheritDoc
 */
Wl_Lead_LeadModel.prototype.config=function()
{
  return {"a_field":{"a_field_data":{"post":{"post":true}},"a_field_list":{"get":{"result":true}},"a_skin":{"get":{"result":true}},"can_use_free_purchase":{"get":{"result":true},"post":{"get":true}},"is_backend":{"post":{"get":true}},"is_sing_in":{"post":{"post":true}},"is_sing_in_force":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_lead_source":{"post":{"post":true,"result":true}},"k_skin":{"get":{"get":true},"post":{"get":true}},"s_captcha":{"post":{"post":true}},"text_lead_source":{"post":{"post":true}},"text_sign_in_error":{"post":{"result":true}},"uid":{"post":{"result":true}},"url_captcha":{"get":{"result":true}}}};
};

/**
 * Gets information necessary to display "Lead capture" widget.
 *
 * Returns the list of profile fields configured for the widget, skin styling data, captcha URL if required,
 * and whether a free promotion can be applied when a new lead is created.
 *
 * @function
 * @name Wl_Lead_LeadModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves new user via "Lead capture".
 *
 * Creates a new user account from the submitted lead capture form data, optionally signs in the new user,
 * and associates the lead with a lead source. Returns an error code in `text_sign_in_error` if sign-in was
 * requested but could not be completed.
 *
 * @function
 * @name Wl_Lead_LeadModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
