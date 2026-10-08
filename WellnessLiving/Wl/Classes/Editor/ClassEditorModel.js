/**
 * Returns everything the class setup form needs.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Editor_ClassEditorModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_class";

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_access
   * @property {string[]} a_login_type Keys of the client types that may book the class.
   * @property {string[]} a_login_type_staff Keys of the client types staff may book into the class.
   * @property {string[]} a_member_group Keys of the client groups that may book the class.
   * @property {?number} i_age_from_month Months above the whole years of the minimum age of a client of the class.
   * @property {?number} i_age_from_year Whole years of the minimum age of a client of the class.
   * @property {?number} i_age_to_month Months above the whole years of the maximum age of a client of the class.
   * @property {?number} i_age_to_year Whole years of the maximum age of a client of the class.
   * @property {number} id_age_restrict Kind of the age restriction of the class.
   * @property {number} id_bookable Who may book the class online.
   * @property {boolean} is_age_public `true` if the class is shown to a client who does not meet its age requirement, `false` if it is hidden from them.
   * @property {boolean} is_age_restrict `true` if the class has an age restriction, `false` otherwise.
   * @property {boolean} is_birthday_update_require `true` if staff agreed to make the birthdate a required field of the client profile, `false` otherwise.
   * @property {boolean} is_bookable_staff `true` if staff may book any client type into the class, `false` if only the client types of `a_login_type_staff`.
   * @property {boolean} is_online_private `true` if the class is hidden from a client who may not book it, `false` if it is shown to them.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_attendance_a_resource_type
   * @property {number} id_resource_control Whether a client picks the asset of this category while booking.
   * @property {number} id_resource_use Whether one asset of this category is taken by the whole class or one by every client.
   * @property {string} k_resource_type Key of the category.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_attendance
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_attendance_a_resource_type} a_resource_type Book-a-Spot asset categories the class requires.
   * @property {number} i_makeup_cap Maximum number of make-up sessions a client may take.
   * @property {boolean} is_prerequisite `true` if a client must attend other services before booking this one, `false` otherwise.
   * @property {boolean} is_quick_buy `true` if staff may sell products from the attendance list of the class, `false` otherwise.
   * @property {boolean} is_replace `true` if the number of the make-up sessions of the class is limited, `false` otherwise.
   * @property {boolean} is_resource_type `true` if the class requires Book-a-Spot assets, `false` otherwise.
   * @property {boolean} is_staff_session `true` if staff may book individual sessions of a block event, `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_discovery
   * @property {string[]} a_class_tab Keys of the Book Now Tabs the class is shown in.
   * @property {string[]} a_search_tag Keys of the quick search tags of the class.
   * @property {string[]} a_shop_category Keys of the store categories the class is listed under.
   * @property {string[]} a_tag Keys of the revenue categories the drop-in revenue of the class is tracked under.
   * @property {boolean} hide_application `true` if the class is hidden in the White Label Achieve Client App, `false` if it is shown there.
   * @property {boolean} is_gym_pass `true` if the class is offered on Wellhub, `false` otherwise.
   * @property {string} k_tag_primary Key of the revenue category the drop-in revenue of the class is tracked under first of all.
   * @property {string} m_revenue_gym_pass Revenue the business earns per client per session of a class offered on Wellhub.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_notification
   * @property {boolean} is_client_notification `true` if the clients of the class receive the default client notifications, `false` otherwise.
   * @property {boolean} is_custom_confirmation `true` if the clients of the class receive a confirmation notification of its own, `false` if they receive the default one.
   * @property {boolean} is_custom_confirmation_mail `true` if the confirmation notification of the class is sent by email, `false` otherwise.
   * @property {boolean} is_custom_confirmation_push `true` if the confirmation notification of the class is sent as a push message, `false` otherwise.
   * @property {boolean} is_custom_confirmation_sms `true` if the confirmation notification of the class is sent by SMS, `false` otherwise.
   * @property {boolean} is_custom_reminder `true` if the clients of the class receive a reminder notification of its own, `false` if they receive the default one.
   * @property {boolean} is_custom_reminder_mail `true` if the reminder notification of the class is sent by email, `false` otherwise.
   * @property {boolean} is_custom_reminder_push `true` if the reminder notification of the class is sent as a push message, `false` otherwise.
   * @property {boolean} is_custom_reminder_sms `true` if the reminder notification of the class is sent by SMS, `false` otherwise.
   * @property {boolean} is_staff_notification `true` if staff receive the default staff notifications of the class, `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_price
   * @property {string} dl_early Last day of the early bird discount.
   * @property {string} f_deposit Deposit a client leaves while booking the class.
   * @property {string} f_early Early bird price of the class.
   * @property {string} f_price Price of one session of the class.
   * @property {string} f_price_total Price of the whole class.
   * @property {boolean} hide_price `true` if the price of a single session is hidden from a client who has an applicable Purchase Option, `false` if it is shown to them.
   * @property {number} id_pay_require Way a client pays for the class.
   * @property {boolean} is_buy_promotion `true` if a client pays for the class with a Purchase Option only, `false` otherwise.
   * @property {boolean} is_buy_single `true` if a client buys one session of the class at a time, `false` otherwise.
   * @property {boolean} is_buy_total `true` if a client buys the whole class at once, `false` otherwise.
   * @property {boolean} is_deposit_percent `true` if `f_deposit` is a percent of the price of the class, `false` if it is an amount of money.
   * @property {boolean} is_early `true` if the class has an early bird discount, `false` otherwise.
   * @property {boolean} is_tax_enable `true` if taxes are applied to the sales of the class, `false` otherwise.
   * @property {string} text_early Last day of the early bird discount as the calendar of the form shows it.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_ticket_a_ticket_option
   * @property {string} f_price Price of one ticket of this type.
   * @property {boolean} is_sold `true` if at least one ticket of this type has been sold, `false` otherwise.
   * @property {string} k_ticket_option Key of the type.
   * @property {string} text_title Title of the type, for example `General admission`.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_o_ticket
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_ticket_a_ticket_option} a_ticket_option Ticket types of a ticketed event, in the order they are offered.
   * @property {number} i_order_limit Number of tickets that may be bought in one order.
   * @property {boolean} is_account_require `true` if a buyer of a ticket must have an account, `false` if a name and an email address are enough.
   * @property {boolean} is_door_pay `true` if a buyer may reserve a ticket and pay for it at the door, `false` if a ticket is paid for at once.
   * @property {boolean} is_terms `true` if a buyer of a ticket must agree to terms and conditions, `false` otherwise.
   * @property {string} xml_terms Terms and conditions a buyer of a ticket must agree to.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class
   * @property {number} i_capacity Number of clients that may book each session of the class.
   * @property {number} id_event_type Type of the event.
   * @property {number} id_note Kind of note staff may take for a client visit.
   * @property {?number} id_virtual_provider Virtual meeting provider of the class. `null` for an in-person class.
   * @property {boolean} is_config_business `true` if the class has policies of its own, `false` if it follows the policies of the business.
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_access} o_access Settings that tell who may book the class.
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_attendance} o_attendance Settings of the way the class is attended.
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_discovery} o_discovery Settings that tell where the class is listed.
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_notification} o_notification Notification settings of the class.
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_price} o_price Pricing settings of the class.
   * @property {Wl_Classes_Editor_ClassEditorModel_a_class_o_ticket} o_ticket Settings a ticketed event adds to the pricing settings.
   * @property {string} s_color_background Color of the class on the schedule in hex format.
   * @property {string} s_description Description of the class.
   * @property {string} s_special Special instructions of the class.
   * @property {string} s_title Title of the class.
   * @property {boolean} show_special_instructions `true` if the special instructions may be shown publicly, `false` if only to a client who booked the class.
   */

  /**
   * Settings of the class the form edits.
   *
   * Filled for a saved class, and with the values a new class starts with while a new class is created. The same
   * settings are accepted back to save the class.
   *
   * @get result
   * @post post
   * @type {Wl_Classes_Editor_ClassEditorModel_a_class}
   */
  this.a_class = undefined;

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_class_tab_list
   * @property {string} text_key Key of the tab: the ID of the tab object and the key of the tab joined with a hyphen. The key of a system tab is `0`.
   * @property {string} text_title Title of the tab.
   */

  /**
   * Book Now Tabs the class may be shown in. Every element is an array:
   *
   * @get result
   * @type {Wl_Classes_Editor_ClassEditorModel_a_class_tab_list[]}
   */
  this.a_class_tab_list = undefined;

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_reminder_info_a_config
   * @property {number} i_before Number of the units of time the reminder is sent before the session.
   * @property {number} id_duration_delay Unit of time the reminder is sent before the session. One of {@link ADurationSid} constants.
   * @property {string} text_time Title of the unit of time.
   */

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_reminder_info
   * @property {Wl_Classes_Editor_ClassEditorModel_a_reminder_info_a_config} a_config Times the reminder is sent at, the earliest one first. Every element is an array:
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
   * @type {Wl_Classes_Editor_ClassEditorModel_a_reminder_info}
   */
  this.a_reminder_info = undefined;

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_search_tag_list
   * @property {string} k_search_tag Key of the tag.
   * @property {string} text_title Title of the tag.
   */

  /**
   * Quick search tags of the category of the business. Every element is an array:
   *
   * @get result
   * @type {Wl_Classes_Editor_ClassEditorModel_a_search_tag_list[]}
   */
  this.a_search_tag_list = undefined;

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_shop_category_list
   * @property {string} k_shop_category Key of the category.
   * @property {string} text_title Title of the category.
   */

  /**
   * Store categories of the business. Every element is an array:
   *
   * @get result
   * @type {Wl_Classes_Editor_ClassEditorModel_a_shop_category_list[]}
   */
  this.a_shop_category_list = undefined;

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_url
   * @property {string} url_category_manage List of store categories.
   * @property {string} url_notification_client Client notifications.
   * @property {string} url_notification_confirmation Client confirmation notification of a class.
   * @property {string} url_notification_reminder Client reminder notification of a class.
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
   * @type {Wl_Classes_Editor_ClassEditorModel_a_url[]}
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
   * Maximum length of description.
   *
   * @get result
   * @type {number}
   */
  this.i_description_limit = undefined;

  /**
   * `true` if the Administration section may be shown, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_admin = undefined;

  /**
   * `true` if the birthdate is a required field of the client profile of the business, `false` otherwise.
   *
   * An age restriction can only be kept to when the birthdate is known, so the form asks staff to make the field
   * required while the restriction is switched on for a business that does not require it yet.
   *
   * @get result
   * @type {boolean}
   */
  this.is_birthday_require = undefined;

  /**
   * `true` if the sign of the currency of the business is written before the amount, `false` if it is written after
   * it.
   *
   * A setting of the currency, not of the business: the dollar sign leads the amount, while the Swedish krona
   * follows it. Every money field of the form puts the sign on this side.
   *
   * @get result
   * @type {boolean}
   */
  this.is_currency_before = true;

  /**
   * `true` if the event may no longer be turned into a ticketed one, or back from it, `false` otherwise.
   *
   * A client who booked or bought locks the move to and from a ticketed event. The lock stays once a purchase has
   * been made, even after it is refunded or voided, so the flag reports whether the event ever had an enrollment
   * rather than whether it has one now. Block and non-block stay interchangeable either way.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event_type_lock = undefined;

  /**
   * `true` if the business may use the FitLIVE virtual provider, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_fitlive = undefined;

  /**
   * `true` if the business may offer the class on Wellhub, `false` otherwise.
   *
   * The Wellhub block of the Online visibility section is only shown while this is `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_gym_pass_support = undefined;

  /**
   * `true` if a new client of the business must add a card at sign-up, `false` otherwise.
   *
   * One of the sign-up rules the form lists for a buyer of a ticket who has no account yet. A setting of the
   * business, not of the class.
   *
   * @get result
   * @type {boolean}
   */
  this.is_ticket_card_require = undefined;

  /**
   * `true` if a new client of the business must sign a waiver, `false` otherwise.
   *
   * One of the sign-up rules the form lists for a buyer of a ticket who has no account yet. A setting of the
   * business, not of the class.
   *
   * @get result
   * @type {boolean}
   */
  this.is_ticket_waiver_require = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class key.
   *
   * `0` while a new class is created, so the key of the model of the client has a value. The key is only checked
   * when it points at a class.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class = "";

  /**
   * Key of the class the save wrote.
   *
   * The key of {@link Wl_Classes_Editor_ClassEditorModel.k_class} while a saved class is changed, and the key of the class that has
   * just been created otherwise. Empty string until the save has run.
   *
   * @post result
   * @type {string}
   */
  this.k_class_save = undefined;

  /**
   * Currency sign of the business.
   *
   * @get result
   * @type {string}
   */
  this.text_currency = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Editor_ClassEditorModel);

/**
 * @inheritDoc
 */
Wl_Classes_Editor_ClassEditorModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"result":true},"post":{"post":true}},"a_class_tab_list":{"get":{"result":true}},"a_reminder_info":{"get":{"result":true}},"a_search_tag_list":{"get":{"result":true}},"a_shop_category_list":{"get":{"result":true}},"a_url":{"get":{"result":true}},"html_policy":{"get":{"result":true}},"html_prerequisite":{"get":{"result":true}},"html_promotion":{"get":{"result":true}},"html_quick_buy":{"get":{"result":true}},"html_tax":{"get":{"result":true}},"i_description_limit":{"get":{"result":true}},"is_admin":{"get":{"result":true}},"is_birthday_require":{"get":{"result":true}},"is_currency_before":{"get":{"result":true}},"is_event_type_lock":{"get":{"result":true}},"is_fitlive":{"get":{"result":true}},"is_gym_pass_support":{"get":{"result":true}},"is_ticket_card_require":{"get":{"result":true}},"is_ticket_waiver_require":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class":{"get":{"get":true},"post":{"get":true}},"k_class_save":{"post":{"result":true}},"text_currency":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Classes_Editor_ClassEditorModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_class Class key. `0` while a new class is created, so the key of the model of the client has a value. The key is only checked when it points at a class.
 * @returns {Wl_Classes_Editor_ClassEditorModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns everything the class setup form needs.
 *
 * The form is rendered by the client, so this endpoint answers with data: the settings of the class, the lists the
 * Book Now Tab, the quick search tag and the store category pickers are filled from, the
 * send rules of the client reminder, the currency sign, whether the Administration section may be shown, the
 * addresses of the pages the form links to and the markup of the blocks that have no template on the client.
 *
 * @function
 * @name Wl_Classes_Editor_ClassEditorModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the class.
 *
 * Creates the class while {@link Wl_Classes_Editor_ClassEditorModel.k_class} is empty, and changes the class otherwise. The settings
 * come in {@link Wl_Classes_Editor_ClassEditorModel.a_class}, which has the same fields the load answers with. The key of the class
 * that has been written is answered with in {@link Wl_Classes_Editor_ClassEditorModel.k_class_save}. An error of a field is reported
 * with the name of the field on the form, one error for every field that failed.
 *
 * @function
 * @name Wl_Classes_Editor_ClassEditorModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
