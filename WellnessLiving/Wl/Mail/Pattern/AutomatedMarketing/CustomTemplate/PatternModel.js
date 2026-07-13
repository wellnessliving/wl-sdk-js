/**
 * Gets custom pattern data.
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
  this.a_business_data = undefined;

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help_global
   * @property {string} text_description A variable description.
   * @property {string} text_field Field name.
   * @property {string} text_parameter A variable name.
   */

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help
   * @property {string} text_description A variable description.
   * @property {string} text_field Field name.
   * @property {string} text_parameter A variable name.
   */

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data
   * @property {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help} a_help An array with help data for template-specific variables:
   * @property {Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_help_data_a_help_global} a_help_global An array with help data for global variables:
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
   * @property {number} id_mail Mail types.
   * @property {boolean} is_mail Is email enabled.
   * @property {boolean} is_push Is push notification enabled.
   * @property {boolean} is_sms Is SMS enabled.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern Mail pattern key.
   * @property {string} text_date_edit Data of the last template save in human-readable format.
   * @property {string} text_html HTML content of the email.
   * @property {string} text_json JSON content of the email for Unlayer editor.
   * @property {string} text_preview >Preview text of the email.
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
  this.a_pattern_load = undefined;

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_load_default
   * @property {number} id_mail Mail types.
   * @property {boolean} is_mail Is email enabled.
   * @property {boolean} is_push Is push notification enabled.
   * @property {boolean} is_sms Is SMS enabled.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern Mail pattern key.
   * @property {string} text_date_edit Data of the last template save in human-readable format.
   * @property {string} text_html HTML content of the email.
   * @property {string} text_json JSON content of the email for Unlayer editor.
   * @property {string} text_preview >Preview text of the email.
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
  this.a_pattern_load_default = undefined;

  /**
   * @typedef {{}} Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel_a_pattern_save
   * @property {number} id_mail Mail types.
   * @property {boolean} is_mail Is email enabled.
   * @property {boolean} is_push Is push notification enabled.
   * @property {boolean} is_sms Is SMS enabled.
   * @property {?string} k_business Business key.
   * @property {string} k_mail_pattern Mail pattern key.
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
  this.a_pattern_save = undefined;

  /**
   * ID of the notification. One of {@link RsMailSid} constants. `0` for empty template.
   *
   * @get get
   * @post get
   * @see RsMailSid
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
  this.json_pattern_list_load = undefined;

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
  this.k_mail_pattern = "";

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
  this.text_phone_formatted = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel);

/**
 * @inheritDoc
 */
Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel.prototype.config=function()
{
  return {"a_field":{"a_business_data":{"get":{"result":true}},"a_help_data":{"get":{"result":true}},"a_pattern_load":{"get":{"result":true}},"a_pattern_load_default":{"get":{"result":true}},"a_pattern_save":{"post":{"post":true}},"id_mail":{"get":{"get":true},"post":{"get":true}},"is_custom_list":{"get":{"get":true}},"json_pattern_list_load":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_mail_pattern":{"get":{"get":true},"post":{"get":true,"result":true}},"k_service":{"get":{"get":true}},"sid_mail_form":{"get":{"get":true}},"text_phone_formatted":{"get":{"result":true}}}};
};

/**
 * Gets custom pattern data.
 *
 * Loads the saved notification template for the given business and mail type together with the
 * default template, the reply-to business contact data and the list of variables available for
 * substitution. When a list is requested, also loads all custom templates for the mail form.
 *
 * @function
 * @name Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves custom pattern.
 *
 * Validates and stores the submitted notification template (email, push or SMS) for the given
 * business. A system template edited under a business is copied into that business instead of
 * modifying the original. The saved mail pattern key is returned in
 * {@link Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel.k_mail_pattern}.
 *
 * @function
 * @name Wl_Mail_Pattern_AutomatedMarketing_CustomTemplate_PatternModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
