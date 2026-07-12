/**
 * Gets and saves custom template pattern data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_business_data
   * @property {?string} text_business_reply_mail Business email address to `Reply TO`. `null` for system business.
   * @property {?string} text_business_reply_name Business name to `Reply TO`. `null` for system business.
   */

  /**
   * Business data.
   *
   * @get result
   * @type {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_business_data}
   */
  this.a_business_data = [];

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help_global_a_help
   * @property {string} text_description A variable description.
   * @property {string} text_field Field name.
   * @property {string} text_parameter A variable name.
   */
  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help_global
   * @property {string} text_description A variable description.
   * @property {string} text_field Field name.
   * @property {string} text_parameter A variable name.
   */
  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data
   * @property {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help_global[]} a_help_global An array with help data for global variables:
   * @property {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help_global_a_help[]} a_help An array with help data for template-specific variables:
   */

  /**
   * Help data for variables.
   *
   * `null` for pushes.
   *
   * @get result
   * @type {?Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data}
   */
  this.a_help_data = null;

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_load
   * @property {boolean} is_mail Is email enabled.
   * @property {boolean} is_push Is push notification enabled.
   * @property {boolean} is_sms Is SMS enabled.
   * @property {number} id_mail ID of the notification. One of {@link RsMailSid} constants.
   * @property {string} k_business Business key.
   * @property {string} [k_mail_pattern] Mail pattern key.
   * @property {string} text_date_edit Data of the last template save in human-readable format.
   * @property {string} text_html HTML content of the email.
   * @property {string} text_json JSON content of the email for Unlayer editor.
   * @property {string} text_preview &gt;Preview text of the email.
   * @property {string} text_push Content of the push notification.
   * @property {string} text_sms Content of the SMS.
   * @property {string} text_template_description Template description.
   * @property {string} text_template_title Template title.
   * @property {string} text_text Text content of the email.
   * @property {number} tl_last_save Time in seconds of the last template save.
   */

  /**
   * Mail pattern data to load.
   *
   * @get result
   * @type {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_load}
   */
  this.a_pattern_load = [];

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_load_default
   * @property {boolean} is_mail Is email enabled.
   * @property {boolean} is_push Is push notification enabled.
   * @property {boolean} is_sms Is SMS enabled.
   * @property {number} id_mail ID of the notification. One of {@link RsMailSid} constants.
   * @property {string} k_business Business key.
   * @property {string} [k_mail_pattern] Mail pattern key.
   * @property {string} text_date_edit Data of the last template save in human-readable format.
   * @property {string} text_html HTML content of the email.
   * @property {string} text_json JSON content of the email for Unlayer editor.
   * @property {string} text_preview &gt;Preview text of the email.
   * @property {string} text_push Content of the push notification.
   * @property {string} text_sms Content of the SMS.
   * @property {string} text_template_description Template description.
   * @property {string} text_template_title Template title.
   * @property {string} text_text Text content of the email.
   * @property {number} tl_last_save Time in seconds of the last template save.
   */

  /**
   * Default mail pattern data to load.
   *
   * @get result
   * @type {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_load_default}
   */
  this.a_pattern_load_default = [];

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_save
   * @property {boolean} is_mail Is email enabled.
   * @property {boolean} is_push Is push notification enabled.
   * @property {boolean} is_sms Is SMS enabled.
   * @property {number} id_mail ID of the notification. One of {@link RsMailSid} constants.
   * @property {?string} k_business Business key.
   * @property {string} [k_mail_pattern] Mail pattern key.
   * @property {string} text_html HTML content of the email.
   * @property {string} text_json JSON content of the email for Unlayer editor.
   * @property {string} text_preview Preview text of the email.
   * @property {string} text_push Content of the push notification.
   * @property {string} text_sms Content of the SMS.
   * @property {string} text_subject Subject of the email.
   * @property {string} text_template_description Template description.
   * @property {string} text_template_title Template title.
   * @property {string} text_text Text content of the email.
   */

  /**
   * Mail pattern data to save.
   *
   * @post post
   * @type {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_save}
   */
  this.a_pattern_save = [];

  /**
   * ID of the notification. One of {@link RsMailSid} constants. `0` for empty template.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mail = 0;

  /**
   * Whether to get a list of custom template data. `true` - to get a list, `false` - otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_custom_list = false;

  /**
   * List of mail patterns data to load.
   * Each element has the structure, described in {@link Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel.a_pattern_load}.
   *
   * @get result
   * @type {string}
   */
  this.json_pattern_list_load = "";

  /**
   * Business key.
   * `null` to use the system business.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Mail pattern key.
   *
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_mail_pattern = "0";

  /**
   * Key of the service being booked.
   *
   * Used to prefer a service-specific custom notification template, when one is configured,
   * over the business-level template.
   *
   * `null` when no single service is in context (e.g. several services are selected at once),
   * in which case the business-level template is returned.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = null;

  /**
   * SID of the mail form. String representation of one from {@link RsMailFormSid} class constants.
   *
   * @get get
   * @type {string}
   */
  this.sid_mail_form = "";

  /**
   * Business sender phone formatted.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_formatted = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel);

/**
 * @inheritDoc
 */
Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel.prototype.config=function()
{
  return {"a_field": {"a_business_data": {"get": {"result": true}},"a_help_data": {"get": {"result": true}},"a_pattern_load": {"get": {"result": true}},"a_pattern_load_default": {"get": {"result": true}},"a_pattern_save": {"post": {"post": true}},"id_mail": {"get": {"get": true},"post": {"get": true}},"is_custom_list": {"get": {"get": true}},"json_pattern_list_load": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_mail_pattern": {"get": {"get": true},"post": {"get": true,"result": true}},"k_service": {"get": {"get": true}},"sid_mail_form": {"get": {"get": true}},"text_phone_formatted": {"get": {"result": true}}}};
};