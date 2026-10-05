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
   * Keys of the Book Now Tabs the class is shown in.
   *
   * Every element is a `text_key` of {@link Wl_Classes_Editor_ClassEditorModel.a_class_tab_list}. Empty for a class that is shown
   * in no tab.
   *
   * @get result
   * @type {string[]}
   */
  this.a_class_tab = undefined;

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
   * Keys of the client types that may book the class.
   *
   * Only taken into account while {@link Wl_Classes_Editor_ClassEditorModel.id_bookable} is
   * {@link Wl_Service_BookableSid}. Empty for a class every client type may book.
   *
   * @get result
   * @type {string[]}
   */
  this.a_login_type = undefined;

  /**
   * Keys of the client types staff may book into the class.
   *
   * Only taken into account while {@link Wl_Classes_Editor_ClassEditorModel.is_bookable_staff} is `false`. Empty for a class staff
   * may book every client type into.
   *
   * @get result
   * @type {string[]}
   */
  this.a_login_type_staff = undefined;

  /**
   * Keys of the client groups that may book the class.
   *
   * Only taken into account while {@link Wl_Classes_Editor_ClassEditorModel.id_bookable} is
   * {@link Wl_Service_BookableSid}. Empty for a class every client group may book.
   *
   * @get result
   * @type {string[]}
   */
  this.a_member_group = undefined;

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
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_resource_type
   * @property {number} id_resource_control Whether a client picks the asset of this category while booking. One of {@link Wl_Resource_ResourceClientControlSid} constants.
   * @property {number} id_resource_use Whether one asset of this category is taken by the whole class or one by every client. One of {@link Wl_Resource_ResourceUseSid} constants.
   * @property {string} k_resource_type Key of the category.
   */

  /**
   * Book-a-Spot asset categories the class requires. Every element is an array:
   *
   * @get result
   * @type {Wl_Classes_Editor_ClassEditorModel_a_resource_type[]}
   */
  this.a_resource_type = undefined;

  /**
   * Keys of the quick search tags of the class.
   *
   * Every element is a `k_search_tag` of {@link Wl_Classes_Editor_ClassEditorModel.a_search_tag_list}. Empty for a class with no
   * tags.
   *
   * @get result
   * @type {string[]}
   */
  this.a_search_tag = undefined;

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
   * Keys of the store categories the event is listed under.
   *
   * Every element is a `k_shop_category` of {@link Wl_Classes_Editor_ClassEditorModel.a_shop_category_list}. Empty for an event
   * that is listed under no category.
   *
   * @get result
   * @type {string[]}
   */
  this.a_shop_category = undefined;

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
   * Keys of the revenue categories the drop-in revenue of the class is tracked under.
   *
   * Empty for a class with no revenue category.
   *
   * @get result
   * @type {string[]}
   */
  this.a_tag = undefined;

  /**
   * @typedef {{}} Wl_Classes_Editor_ClassEditorModel_a_ticket_option
   * @property {string} f_price Price of one ticket of this type.
   * @property {boolean} is_sold `true` if at least one ticket of this type has been sold, `false` otherwise.
   * @property {string} k_ticket_option Key of the type.
   * @property {string} text_title Title of the type, for example `General admission`.
   */

  /**
   * Ticket types of a ticketed event, in the order they are offered. Every element is an array: 
   *
   * Empty for an event that is not ticketed, and for a ticketed event that has no types yet. The client offers an
   * empty row in either case.
   *
   * @get result
   * @type {Wl_Classes_Editor_ClassEditorModel_a_ticket_option[]}
   */
  this.a_ticket_option = undefined;

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
   * Last day of the early bird discount.
   *
   * Empty string if the event has no early bird discount.
   *
   * @get result
   * @type {string}
   */
  this.dl_early = undefined;

  /**
   * Deposit a client leaves while booking the event.
   *
   * A percent of the price of the event while {@link Wl_Classes_Editor_ClassEditorModel.is_deposit_percent} is `true`, an amount of
   * money otherwise. `0.00` unless {@link Wl_Classes_Editor_ClassEditorModel.id_pay_require} is
   * {@link Wl_Classes_RequirePaySid}. The field keeps the name the legacy form posts, which carries
   * both an amount of money and a percent.
   *
   * @get result
   * @type {string}
   */
  this.f_deposit = "0.00";

  /**
   * Early bird discount of the event.
   *
   * `0.00` if the event has no early bird discount. The field keeps the name the legacy form posts.
   *
   * @get result
   * @type {string}
   */
  this.f_early = "0.00";

  /**
   * Price of one session of the event.
   *
   * Only taken into account while {@link Wl_Classes_Editor_ClassEditorModel.is_buy_single} is `true`. The field keeps the name the
   * legacy form posts.
   *
   * @get result
   * @type {string}
   */
  this.f_price = "0.00";

  /**
   * Price of the whole event.
   *
   * Only taken into account while {@link Wl_Classes_Editor_ClassEditorModel.is_buy_total} is `true`. The field keeps the name the
   * legacy form posts.
   *
   * @get result
   * @type {string}
   */
  this.f_price_total = "0.00";

  /**
   * `true` if the event is hidden in the White Label Achieve Client App, `false` if it is shown there.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_application = undefined;

  /**
   * `true` if the price of a single session is hidden from a client who has an applicable Purchase Option,
   * `false` if it is shown to them.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_price = undefined;

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
   * Months above the whole years of the minimum age of a client of the class.
   *
   * `null` if the class has no minimum age.
   *
   * @get result
   * @type {?number}
   */
  this.i_age_from_month = null;

  /**
   * Whole years of the minimum age of a client of the class.
   *
   * `null` if the class has no minimum age.
   *
   * @get result
   * @type {?number}
   */
  this.i_age_from_year = null;

  /**
   * Months above the whole years of the maximum age of a client of the class.
   *
   * `null` if the class has no maximum age.
   *
   * @get result
   * @type {?number}
   */
  this.i_age_to_month = null;

  /**
   * Whole years of the maximum age of a client of the class.
   *
   * `null` if the class has no maximum age.
   *
   * @get result
   * @type {?number}
   */
  this.i_age_to_year = null;

  /**
   * Number of clients that may enroll into each instance of the event.
   *
   * @get result
   * @type {number}
   */
  this.i_capacity = 10;

  /**
   * Number of tickets that may be sold for each instance of a ticketed event.
   *
   * The same number as {@link Wl_Classes_Editor_ClassEditorModel.i_capacity}, in a field of its own because a ticketed event asks
   * for it in a field the legacy form posts under this name.
   *
   * @get result
   * @type {number}
   */
  this.i_capacity_ticket = 10;

  /**
   * Maximum length of description.
   *
   * @get result
   * @type {number}
   */
  this.i_description_limit = undefined;

  /**
   * Maximum number of make-up sessions a client may take.
   *
   * `0` stands for as many as the number of the sessions the client missed.
   *
   * @get result
   * @type {number}
   */
  this.i_makeup_cap = undefined;

  /**
   * Number of tickets that may be bought in one order of a ticketed event.
   *
   * @get result
   * @type {number}
   */
  this.i_order_limit = 1;

  /**
   * Kind of the age restriction of the class.
   *
   * Only taken into account while {@link Wl_Classes_Editor_ClassEditorModel.is_age_restrict} is `true`.
   *
   * @get result
   * @see Wl_Service_AgeRestrictionStatusSid
   * @type {number}
   */
  this.id_age_restrict = 2;

  /**
   * Who may book the class online.
   *
   * The class keeps the client types and the groups whether online booking is open or not, so the form works this
   * out from them: a class that is closed to everyone is only told apart from a restricted one by them being
   * empty.
   *
   * @get result
   * @see Wl_Service_BookableSid
   * @type {number}
   */
  this.id_bookable = undefined;

  /**
   * Type of the event.
   *
   * @get result
   * @see Wl_Classes_Edit_EventTypeEnum
   * @type {number}
   */
  this.id_event_type = undefined;

  /**
   * Kind of note staff may take for a client visit.
   *
   * @get result
   * @see Wl_Visit_Note_Sid_NoteSid
   * @type {number}
   */
  this.id_note = undefined;

  /**
   * Way a client pays for the event.
   *
   * @get result
   * @see Wl_Classes_RequirePaySid
   * @type {number}
   */
  this.id_pay_require = undefined;

  /**
   * Virtual meeting provider of the event. `null` for an in-person event.
   *
   * @get result
   * @see Wl_Virtual_VirtualProviderSid
   * @type {?number}
   */
  this.id_virtual_provider = null;

  /**
   * `true` if a buyer of a ticket must have an account, `false` if a name and an email address are enough.
   *
   * Ignored for an event that is not ticketed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_account_require = undefined;

  /**
   * `true` if the Administration section may be shown, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_admin = undefined;

  /**
   * `true` if the class is shown to a client who does not meet its age requirement, `false` if it is hidden from
   * them.
   *
   * @get result
   * @type {boolean}
   */
  this.is_age_public = undefined;

  /**
   * `true` if the class has an age restriction, `false` otherwise.
   *
   * The legacy form keeps no flag of its own for this switch, so it is worked out from the age bounds, the same
   * as in the legacy form.
   *
   * @get result
   * @type {boolean}
   */
  this.is_age_restrict = undefined;

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
   * `true` if staff may book any client type into the class, `false` if only the client types of
   * {@link Wl_Classes_Editor_ClassEditorModel.a_login_type_staff}.
   *
   * @get result
   * @type {boolean}
   */
  this.is_bookable_staff = true;

  /**
   * `true` if a client pays for the event with a Purchase Option only, `false` otherwise.
   *
   * One of the three ways a client pays for the event, which are mutually exclusive:
   * {@link Wl_Classes_Editor_ClassEditorModel.is_buy_promotion}, {@link Wl_Classes_Editor_ClassEditorModel.is_buy_single} and
   * {@link Wl_Classes_Editor_ClassEditorModel.is_buy_total}.
   * expects.
   *
   * @get result
   * @type {boolean}
   */
  this.is_buy_promotion = undefined;

  /**
   * `true` if a client buys one session of the event at a time, `false` otherwise.
   *
   * {@link Wl_Classes_Editor_ClassEditorModel.f_price} is the price of a session. See
   * {@link Wl_Classes_Editor_ClassEditorModel.is_buy_promotion} for the other ways a client pays for the event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_buy_single = undefined;

  /**
   * `true` if a client buys the whole event at once, `false` otherwise.
   *
   * {@link Wl_Classes_Editor_ClassEditorModel.f_price_total} is the price of the event. Defaults to `true`, the same as the legacy
   * form offers for a new event. See {@link Wl_Classes_Editor_ClassEditorModel.is_buy_promotion} for the other ways a client pays
   * for the event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_buy_total = true;

  /**
   * `true` if the clients of the class receive the default client notifications, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_client_notification = true;

  /**
   * `true` if the class has policies of its own, `false` if it follows the policies of the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_config_business = undefined;

  /**
   * `true` if the clients of the class receive a confirmation notification of its own, `false` if they receive the
   * default one.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_confirmation = undefined;

  /**
   * `true` if the confirmation notification of the class is sent by email, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_custom_confirmation} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_confirmation_mail = undefined;

  /**
   * `true` if the confirmation notification of the class is sent as a push message, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_custom_confirmation} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_confirmation_push = undefined;

  /**
   * `true` if the confirmation notification of the class is sent by SMS, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_custom_confirmation} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_confirmation_sms = undefined;

  /**
   * `true` if the clients of the class receive a reminder notification of its own, `false` if they receive the
   * default one.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_reminder = undefined;

  /**
   * `true` if the reminder notification of the class is sent by email, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_custom_reminder} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_reminder_mail = undefined;

  /**
   * `true` if the reminder notification of the class is sent as a push message, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_custom_reminder} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_reminder_push = undefined;

  /**
   * `true` if the reminder notification of the class is sent by SMS, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_custom_reminder} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_custom_reminder_sms = undefined;

  /**
   * `true` if {@link Wl_Classes_Editor_ClassEditorModel.f_deposit} is a percent of the price of the event, `false` if it is an
   * amount of money.
   *
   * Copy of the `is_deposit_percent` column of the class.
   *
   * @get result
   * @type {boolean}
   */
  this.is_deposit_percent = undefined;

  /**
   * `true` if a buyer may reserve a ticket and pay for it at the door, `false` if a ticket is paid for at once.
   *
   * Ignored for an event that is not ticketed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_door_pay = undefined;

  /**
   * `true` if the event has an early bird discount, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_early = undefined;

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
   * `true` if the event is offered on Wellhub, `false` otherwise.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_gym_pass_support} is `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_gym_pass = undefined;

  /**
   * `true` if the business may offer the event on Wellhub, `false` otherwise.
   *
   * The Wellhub block of the Online visibility section is only shown while this is `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_gym_pass_support = undefined;

  /**
   * `true` if the class is hidden from a client who may not book it, `false` if it is shown to them.
   *
   * @get result
   * @type {boolean}
   */
  this.is_online_private = undefined;

  /**
   * `true` if a client must attend other services before booking this one, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_prerequisite = undefined;

  /**
   * `true` if staff may sell products from the attendance list of the class, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_quick_buy = undefined;

  /**
   * `true` if the number of the make-up sessions of the event is limited, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_replace = undefined;

  /**
   * `true` if the class requires Book-a-Spot assets, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_resource_type = undefined;

  /**
   * `true` if staff receive the default staff notifications of the class, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff_notification = true;

  /**
   * `true` if staff may book individual sessions of a block event, `false` otherwise.
   *
   * Ignored for a non-block or a ticketed event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff_session = undefined;

  /**
   * `true` if taxes are applied to the sales of the class, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tax_enable = undefined;

  /**
   * `true` if a buyer of a ticket must agree to terms and conditions, `false` otherwise.
   *
   * Ignored for an event that is not ticketed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_terms = undefined;

  /**
   * `true` if a new client of the business must add a card at sign-up, `false` otherwise.
   *
   * One of the sign-up rules the form lists for a buyer of a ticket who has no account yet. A setting of the
   * business, not of the event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_ticket_card_require = undefined;

  /**
   * `true` if a new client of the business must sign a waiver, `false` otherwise.
   *
   * One of the sign-up rules the form lists for a buyer of a ticket who has no account yet. A setting of the
   * business, not of the event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_ticket_waiver_require = undefined;

  /**
   * Business key.
   *
   * @get get
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
   * @type {string}
   */
  this.k_class = "";

  /**
   * Key of the revenue category the drop-in revenue of the class is tracked under first of all.
   *
   * Empty string for a class with no revenue category. Always one of {@link Wl_Classes_Editor_ClassEditorModel.a_tag}.
   *
   * @get result
   * @type {string}
   */
  this.k_tag_primary = undefined;

  /**
   * Revenue the business earns per client per session of an event offered on Wellhub.
   *
   * Ignored while {@link Wl_Classes_Editor_ClassEditorModel.is_gym_pass} is `false`.
   *
   * @get result
   * @type {string}
   */
  this.m_revenue_gym_pass = "0.00";

  /**
   * Color of the event on the schedule in hex format.
   *
   * @get result
   * @type {string}
   */
  this.s_color_background = undefined;

  /**
   * Description of the event.
   *
   * @get result
   * @type {string}
   */
  this.s_description = undefined;

  /**
   * Special instructions of the event.
   *
   * @get result
   * @type {string}
   */
  this.s_special = undefined;

  /**
   * Title of the event.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * `true` if the special instructions may be shown publicly, `false` if only to a client who booked the event.
   *
   * @get result
   * @type {boolean}
   */
  this.show_special_instructions = true;

  /**
   * Currency sign of the business.
   *
   * @get result
   * @type {string}
   */
  this.text_currency = undefined;

  /**
   * Last day of the early bird discount as the calendar of the form shows it.
   *
   * Empty string if the event has no early bird discount. {@link Wl_Classes_Editor_ClassEditorModel.dl_early} carries the same day
   * in the format the form posts.
   *
   * @get result
   * @type {string}
   */
  this.text_early = undefined;

  /**
   * Terms and conditions a buyer of a ticket must agree to.
   *
   * Empty string for an event that is not ticketed, and for a ticketed event with no terms.
   *
   * @get result
   * @type {string}
   */
  this.xml_terms = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Editor_ClassEditorModel);

/**
 * @inheritDoc
 */
Wl_Classes_Editor_ClassEditorModel.prototype.config=function()
{
  return {"a_field":{"a_class_tab":{"get":{"result":true}},"a_class_tab_list":{"get":{"result":true}},"a_login_type":{"get":{"result":true}},"a_login_type_staff":{"get":{"result":true}},"a_member_group":{"get":{"result":true}},"a_reminder_info":{"get":{"result":true}},"a_resource_type":{"get":{"result":true}},"a_search_tag":{"get":{"result":true}},"a_search_tag_list":{"get":{"result":true}},"a_shop_category":{"get":{"result":true}},"a_shop_category_list":{"get":{"result":true}},"a_tag":{"get":{"result":true}},"a_ticket_option":{"get":{"result":true}},"a_url":{"get":{"result":true}},"dl_early":{"get":{"result":true}},"f_deposit":{"get":{"result":true}},"f_early":{"get":{"result":true}},"f_price":{"get":{"result":true}},"f_price_total":{"get":{"result":true}},"hide_application":{"get":{"result":true}},"hide_price":{"get":{"result":true}},"html_policy":{"get":{"result":true}},"html_prerequisite":{"get":{"result":true}},"html_promotion":{"get":{"result":true}},"html_quick_buy":{"get":{"result":true}},"html_tax":{"get":{"result":true}},"i_age_from_month":{"get":{"result":true}},"i_age_from_year":{"get":{"result":true}},"i_age_to_month":{"get":{"result":true}},"i_age_to_year":{"get":{"result":true}},"i_capacity":{"get":{"result":true}},"i_capacity_ticket":{"get":{"result":true}},"i_description_limit":{"get":{"result":true}},"i_makeup_cap":{"get":{"result":true}},"i_order_limit":{"get":{"result":true}},"id_age_restrict":{"get":{"result":true}},"id_bookable":{"get":{"result":true}},"id_event_type":{"get":{"result":true}},"id_note":{"get":{"result":true}},"id_pay_require":{"get":{"result":true}},"id_virtual_provider":{"get":{"result":true}},"is_account_require":{"get":{"result":true}},"is_admin":{"get":{"result":true}},"is_age_public":{"get":{"result":true}},"is_age_restrict":{"get":{"result":true}},"is_birthday_require":{"get":{"result":true}},"is_bookable_staff":{"get":{"result":true}},"is_buy_promotion":{"get":{"result":true}},"is_buy_single":{"get":{"result":true}},"is_buy_total":{"get":{"result":true}},"is_client_notification":{"get":{"result":true}},"is_config_business":{"get":{"result":true}},"is_custom_confirmation":{"get":{"result":true}},"is_custom_confirmation_mail":{"get":{"result":true}},"is_custom_confirmation_push":{"get":{"result":true}},"is_custom_confirmation_sms":{"get":{"result":true}},"is_custom_reminder":{"get":{"result":true}},"is_custom_reminder_mail":{"get":{"result":true}},"is_custom_reminder_push":{"get":{"result":true}},"is_custom_reminder_sms":{"get":{"result":true}},"is_deposit_percent":{"get":{"result":true}},"is_door_pay":{"get":{"result":true}},"is_early":{"get":{"result":true}},"is_event_type_lock":{"get":{"result":true}},"is_fitlive":{"get":{"result":true}},"is_gym_pass":{"get":{"result":true}},"is_gym_pass_support":{"get":{"result":true}},"is_online_private":{"get":{"result":true}},"is_prerequisite":{"get":{"result":true}},"is_quick_buy":{"get":{"result":true}},"is_replace":{"get":{"result":true}},"is_resource_type":{"get":{"result":true}},"is_staff_notification":{"get":{"result":true}},"is_staff_session":{"get":{"result":true}},"is_tax_enable":{"get":{"result":true}},"is_terms":{"get":{"result":true}},"is_ticket_card_require":{"get":{"result":true}},"is_ticket_waiver_require":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"get":true}},"k_tag_primary":{"get":{"result":true}},"m_revenue_gym_pass":{"get":{"result":true}},"s_color_background":{"get":{"result":true}},"s_description":{"get":{"result":true}},"s_special":{"get":{"result":true}},"s_title":{"get":{"result":true}},"show_special_instructions":{"get":{"result":true}},"text_currency":{"get":{"result":true}},"text_early":{"get":{"result":true}},"xml_terms":{"get":{"result":true}}}};
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
 * The form is rendered by the client, so this endpoint answers with data: the fields of the class section by
 * section, the lists the Book Now Tab, the quick search tag and the store category pickers are filled from, the
 * send rules of the client reminder, the currency sign, whether the Administration section may be shown, the
 * addresses of the pages the form links to and the markup of the blocks that have no template on the client.
 *
 * @function
 * @name Wl_Classes_Editor_ClassEditorModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
