/**
 * Gets information from the Lead Capture widget and saves a new user’s information.
 *
 * A user can be added to a second business by adding them first as a lead. If your business uses Enterprise Cloud,
 * there may be a restriction where clients can only be members in one enterprise location (travellers in all
 * other enterprise locations).
 *
 * This endpoint using captcha check.
 * To pass captcha need study the documentation by captcha API, there you will find that you need to send a captcha for a specific action.
 * For this API an action is `1072`.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_LeadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of fields containing the lead information.
   * The keys are the field keys and values are field values.
   *
   * If field key is `Address` field key, value may be an array or string.
   * Can be a string if only address field is used. Will be an array if city and postal code are used,
   * with the following keys:
   *
   * <dl>
   * <dt>string <var>text_address</var></dt>
   * <dd>Address.</dd>
   * <dt>string <var>k_city</var></dt>
   * <dd>City key.</dd>
   * <dt>string <var>text_postal</var></dt>
   * <dd>Postal code.</dd>
   * </dl>
   *
   * @post post
   * @type {string[]}
   */
  this.a_field_data = [];

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_field_list_a_item
   * @property {string} s_id The option ID.
   * @property {string} text_title The option title.
   */
  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_field_list
   * @property {Wl_Lead_LeadModel_a_field_list_a_item[]} a_item A list of possible options for an HTML select field. This value is only used if this field is an HTML select.
   * Every element has the following keys:
   * <dl>
   *   <dt>string <tt>s_id</tt></dt>
   *   <dd>The option ID.</dd>
   *   <dt>string <tt>text_title</tt></dt>
   *   <dd>The option title.</dd>
   * </dl>
   * @property {number} id_field_general The type of the general field. This is one of the {@link RsFieldGeneralSid}.
   * This value is only set if the field is one of the general fields.
   * @property {number} id_field_type The field type. This is one of the {@link RsFieldTypeSid} constants.
   * @property {boolean} is_require If `true`, then the field is mandatory. If `false`, then the field isn't mandatory.
   * @property {string} k_field The field key.
   * @property {string} text_field The field title.
   */

  /**
   * A list of profile fields in the business. Every element has the following keys:
   * <dl>
   *   <dt>
   *      array[] <var>a_item</var>
   *   </dt>
   *   <dd>
   *     A list of possible options for an HTML select field. This value is only used if this field is an HTML select.
   *     Every element has the following keys:
   *     <dl>
   *       <dt>string <var>s_id</var></dt>
   *       <dd>The option ID.</dd>
   *       <dt>string <var>text_title</var></dt>
   *       <dd>The option title.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>id_field_general</var>
   *   </dt>
   *   <dd>
   *     The type of the general field. This is one of the {@link RsFieldGeneralSid}.
   *     This value is only set if the field is one of the general fields.
   *   </dd>
   *   <dt>
   *     int <var>id_field_type</var>
   *   </dt>
   *   <dd>
   *     The field type. This is one of the {@link RsFieldTypeSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_require</var>
   *   </dt>
   *   <dd>
   *     If `true`, then the field is mandatory. If `false`, then the field isn't mandatory.
   *   </dd>
   *   <dt>
   *     string <var>k_field</var>
   *   </dt>
   *   <dd>
   *     The field key.
   *   </dd>
   *   <dt>
   *     string <var>text_field</var>
   *   </dt>
   *   <dd>
   *     The field title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Lead_LeadModel_a_field_list[]}
   */
  this.a_field_list = undefined;

  /**
   * @typedef {{}} Wl_Lead_LeadModel_a_skin
   * @property {{}} a_style The general style settings.
   * @property {{}} background The background settings.
   * @property {{}} field-font The font settings.
   * @property {{}} header-text The header settings.
   * @property {{}} info-show The information settings.
   * @property {{}} submit-background The settings for the submit button background.
   * @property {{}} submit-font The settings for the submit button font.
   * @property {{}} submit-text The settings for the submit button text.
   */

  /**
   * The skin configuration:
   * <dl>
   *   <dt>array <var>a_style</var></dt><dd>The general style settings.</dd>
   *   <dt>array <var>background</var></dt><dd>The background settings.</dd>
   *   <dt>array <var>field-font</var></dt><dd>The font settings.</dd>
   *   <dt>array <var>header-text</var></dt><dd>The header settings.</dd>
   *   <dt>array <var>info-show</var></dt><dd>The information settings.</dd>
   *   <dt>array <var>submit-background</var></dt><dd>The settings for the submit button background.</dd>
   *   <dt>array <var>submit-font</var></dt><dd>The settings for the submit button font.</dd>
   *   <dt>array <var>submit-text</var></dt><dd>The settings for the submit button text.</dd>
   * </dl>
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
   * - different user is signed in already (can be changed with {@link Wl_Lead_LeadModel.is_sing_in_force}).
   *
   * If lead is not signed in, then {@link Wl_Lead_LeadModel.text_sign_in_error} will contain an error message.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sing_in = false;

  /**
   * `true` if newly created lead should be automatically signed in instead of the currently signed-in user,
   * `false` if currently singed-in user should not be signed out.
   * If lead is not signed in, then {@link Wl_Lead_LeadModel.text_sign_in_error} will contain an error message.
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
  this.k_business = "0";

  /**
   * Key of the lead source.
   *
   * Must be `null` if <var>text_lead_source</var> is set.
   * If both parameters are empty, the {@link Wl_Mode_ModeSid.API} lead source will be used.
   *
   * {@link Wl_Lead_LeadSourceElementModel.LEAD_SOURCE_REPLACE_NONE} if Lead Source is to be unselected for the user.
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
  this.k_skin = "0";

  /**
   * The characters entered by the lead for the captcha test.
   * This isn't necessary if the GET method returned an empty {@link Wl_Lead_LeadModel.url_captcha}.
   * This field isn't necessary if the GET method returned an empty {@link Wl_Lead_LeadModel.url_captcha}.
   *
   * @post post
   * @type {string}
   */
  this.s_captcha = "";

  /**
   * Lead source title.
   *
   * A new lead source will be created if it does not exist.
   * Must be `null` if <var>k_lead_source</var> is set.
   * If both parameters are empty, the {@link Wl_Mode_ModeSid.API} lead source will be used.
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
  this.text_sign_in_error = "";

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
  return {"a_field": {"a_field_data": {"post": {"post": true}},"a_field_list": {"get": {"result": true}},"a_skin": {"get": {"result": true}},"can_use_free_purchase": {"get": {"result": true},"post": {"get": true}},"is_backend": {"post": {"get": true}},"is_sing_in": {"post": {"post": true}},"is_sing_in_force": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_lead_source": {"post": {"post": true,"result": true}},"k_skin": {"get": {"get": true},"post": {"get": true}},"s_captcha": {"post": {"post": true}},"text_lead_source": {"post": {"post": true}},"text_sign_in_error": {"post": {"result": true}},"uid": {"post": {"result": true}},"url_captcha": {"get": {"result": true}}}};
};