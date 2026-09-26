/**
 * Returns everything the event setup form needs besides the event itself.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_Editor_SetupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_class";

  /**
   * @typedef {{}} Wl_Event_Editor_SetupModel_a_class_tab
   * @property {boolean} is_selected `true` if the event is shown in this tab, `false` otherwise.
   * @property {string} s_key Key of the tab: the ID of the tab object and the key of the tab joined with a hyphen. The key of a system tab is `0`.
   * @property {string} text_title Title of the tab.
   */

  /**
   * Book Now Tabs the event may be shown in. Every element is an array:
   *
   * @get result
   * @type {Wl_Event_Editor_SetupModel_a_class_tab[]}
   */
  this.a_class_tab = undefined;

  /**
   * @typedef {{}} Wl_Event_Editor_SetupModel_a_reminder_info_a_config
   * @property {number} i_before Number of the units of time the reminder is sent before the session.
   * @property {number} id_duration_delay Unit of time the reminder is sent before the session. One of {@link ADurationSid} constants.
   * @property {string} text_time Title of the unit of time.
   */

  /**
   * @typedef {{}} Wl_Event_Editor_SetupModel_a_reminder_info
   * @property {Wl_Event_Editor_SetupModel_a_reminder_info_a_config} a_config Times the reminder is sent at, the earliest one first. Every element is an array:
   * @property {number} i_login_type Number of the client types the reminder is sent to.
   * @property {number} i_login_type_all Number of the client types of the business.
   * @property {number} i_member_group Number of the client groups the reminder is sent to.
   * @property {number} i_member_group_all Number of the client groups of the business.
   * @property {boolean} is_login_type `true` if the reminder is sent to certain client types only, `false` otherwise.
   * @property {boolean} is_login_type_all `true` if every client type of the business is selected, `false` otherwise.
   * @property {boolean} is_member_group `true` if the reminder is sent to certain client groups only, `false` otherwise.
   * @property {boolean} is_member_group_all `true` if every client group of the business is selected, `false` otherwise.
   */

  /**
   * Send rules of the client reminder. Keys are:
   *
   * @get result
   * @type {Wl_Event_Editor_SetupModel_a_reminder_info}
   */
  this.a_reminder_info = undefined;

  /**
   * @typedef {{}} Wl_Event_Editor_SetupModel_a_search_tag
   * @property {string} k_search_tag Key of the tag.
   * @property {string} text_title Title of the tag.
   */

  /**
   * Quick search tags of the category of the business. Every element is an array:
   *
   * @get result
   * @type {Wl_Event_Editor_SetupModel_a_search_tag[]}
   */
  this.a_search_tag = undefined;

  /**
   * @typedef {{}} Wl_Event_Editor_SetupModel_a_shop_category
   * @property {string} k_shop_category Key of the category.
   * @property {string} text_title Title of the category.
   */

  /**
   * Store categories of the business. Every element is an array:
   *
   * @get result
   * @type {Wl_Event_Editor_SetupModel_a_shop_category[]}
   */
  this.a_shop_category = undefined;

  /**
   * @typedef {{}} Wl_Event_Editor_SetupModel_a_url
   * @property {string} url_category_manage List of store categories.
   * @property {string} url_notification_client Client notifications.
   * @property {string} url_notification_confirmation Client confirmation notification of an event.
   * @property {string} url_notification_reminder Client reminder notification of an event.
   * @property {string} url_notification_staff Staff notifications.
   * @property {string} url_policy_manage Default business policies.
   * @property {string} url_product_manage List of products.
   * @property {string} url_resource_manage List of Book-a-Spot assets.
   * @property {string} url_ticket_card Store settings that require a card at sign-up.
   * @property {string} url_ticket_waiver Online waiver settings.
   */

  /**
   * Addresses of the pages the form links to:
   *
   * @get result
   * @type {Wl_Event_Editor_SetupModel_a_url[]}
   */
  this.a_url = undefined;

  /**
   * Markup of the Business policies block of the form.
   *
   * The block is the form of the policy rules of the business. There is no template of this form on the client, so
   * the block is rendered here and the client only moves the markup into the section it belongs to.
   *
   * @get result
   * @type {string}
   */
  this.html_policy = undefined;

  /**
   * Markup of the Prerequisites block of the form.
   *
   * The block is a picker of the services of the business. There is no template of this picker on the client, so
   * the block is rendered here and the client only moves the markup into the section it belongs to.
   *
   * @get result
   * @type {string}
   */
  this.html_prerequisite = undefined;

  /**
   * Markup of the Purchase Options block of the form.
   *
   * The block is a picker of the Purchase Options of the business, followed by the list of the picked ones. There
   * is no template of either of them on the client, so the block is rendered here and the client only moves the
   * markup into the section it belongs to.
   *
   * @get result
   * @type {string}
   */
  this.html_promotion = undefined;

  /**
   * Markup of the Quick Buy block of the form.
   *
   * The block is a picker of the products of the business. There is no template of this picker on the client, so
   * the block is rendered here and the client only moves the markup into the section it belongs to.
   *
   * @get result
   * @type {string}
   */
  this.html_quick_buy = undefined;

  /**
   * Markup of the Taxes block of the form.
   *
   * The block is a selector of the taxes of the business. There is no template of this select on the client, so the
   * block is rendered here and the client only moves the markup into the section it belongs to.
   *
   * @get result
   * @type {string}
   */
  this.html_tax = undefined;

  /**
   * `true` if the Administration section may be shown, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_admin = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Event key.
   *
   * `0` while a new event is created, so the key of the model of the client has a value. The key is only checked
   * when it points at an event.
   *
   * @get get
   * @type {string}
   */
  this.k_class = "";

  /**
   * Currency sign of the business.
   *
   * @get result
   * @type {string}
   */
  this.text_currency = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_Editor_SetupModel);

/**
 * @inheritDoc
 */
Wl_Event_Editor_SetupModel.prototype.config=function()
{
  return {"a_field":{"a_class_tab":{"get":{"result":true}},"a_reminder_info":{"get":{"result":true}},"a_search_tag":{"get":{"result":true}},"a_shop_category":{"get":{"result":true}},"a_url":{"get":{"result":true}},"html_policy":{"get":{"result":true}},"html_prerequisite":{"get":{"result":true}},"html_promotion":{"get":{"result":true}},"html_quick_buy":{"get":{"result":true}},"html_tax":{"get":{"result":true}},"is_admin":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"get":true}},"text_currency":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Event_Editor_SetupModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_class Event key. `0` while a new event is created, so the key of the model of the client has a value. The key is only checked when it points at an event.
 * @returns {Wl_Event_Editor_SetupModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns everything the event setup form needs besides the event itself.
 *
 * The form is rendered by the client, so this endpoint answers with data: the lists the Book Now Tab, the quick
 * search tag and the store category pickers are filled from, the business policies the Business policies section
 * starts with, the send rules of the client reminder, the currency sign, whether the Administration section may
 * be shown, the addresses of the pages the form links to and the markup of the blocks that have no template on
 * the client.
 *
 * @function
 * @name Wl_Event_Editor_SetupModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
