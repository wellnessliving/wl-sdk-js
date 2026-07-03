/**
 * Returns available purchase options, existing client promotions, session passes, and prizes for the specified session.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Wl_Book_Process_Purchase_Purchase56Model} instead.
 */
function Wl_Book_Process_Purchase_PurchaseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,k_business,uid,id_mode";

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_prize
   * @property {string} f_price The price, always '0'.
   * @property {number} i_count Login prize remaining quantity.
   * @property {number} i_limit The limit of sessions that can be booked with reward prize.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The key of the Purchase Option in the database. The table depends on `id_purchase_item`.
   * @property {string} k_login_prize Key of login prize.
   * @property {string} s_value The unique identifier.
   * @property {string} text_title User-friendly login prize description.
   */

  /**
   * Data about the login prize which can be used to pay for service.
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_login_prize}
   */
  this.a_login_prize = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The number of visits the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} i_remain The number of the remaining visits the Purchase Option has left.
   * @property {?number} i_remain_duration The number of minutes left in the Purchase Option.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period (for example "this week" or "for a 4 day period").
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_restrict_data
   * @property {number} i_book The number of future sessions paid using this Purchase Option.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The Purchase Option's usage count.
   * @property {number} i_visit_past The number of attended sessions before the last renewal. This will be `0` if there aren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   * @property {string} text_restriction The description of restriction period (for example "this week" or "for a 4 day period").
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info} a_login_promotion_info Information about the Purchase Option with the following information:
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_restrict} a_restrict Data about the shortest restriction period:
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_restrict_data} a_restrict_data Data about all restriction periods given as an array, where each record has the following structure:
   * @property {string[]} a_uid_share List of UIDs of users who share this promotion. List of those passed in the {@link Wl_Book_Process_Purchase_PurchaseModel} array.
   * @property {string[]} a_visit_limit The list of calendar restrictions of the promotion (for example, 4 per week).
   * @property {number} i_limit The number of visits the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} i_promotion_priority Priority of this promotion. Result of {@link Wl_Promotion_Priority_PromotionPrioritySid} method.
   * @property {number} id_program Program types.
   * @property {boolean} is_convert If `true`, the promotion converts to another instance upon expiration. Otherwise, this will be `false`.
   * @property {boolean} is_shared `true` if the promotion is shared with the client, `false` if the client is owner of the promotion.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} s_class_include The list of services provided by this Purchase Option.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_promotion_convert This is only set if `is_convert` is `true`. The title to use for the new promotion instance upon auto-renewal.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item If this promotion is a package, this field will contain a list of Purchase Options contained in the package.
   */

  /**
   * A list of the client's login promotions that can be applied to a given service.
   * Each element has the following fields:
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_group
   * @property {number} i_session Number of paid sessions of the same class|event that were selected for the previous user.   This number should not include free or waitlist unpaid sessions.
   * @property {string} k_login_promotion Selected purchase option.
   * @property {string} uid UID of the previous user.
   */

  /**
   * A list of existing purchase options that were selected for previous clients (group).
   *
   * Note:
   * * It makes sense if for all clients the list is loaded within
   *      the same pair {@link Wl_Book_Process_Purchase_PurchaseModel} and {@link Wl_Book_Process_Purchase_PurchaseModel}.
   * * If promotions are shared, the system will try to determine if there are enough sessions left for the next
   *      client who has the same promotion.
   * * A very simple check is carried out based on a comparison of the remaining sessions for the promotion
   *      with the number of times it was selected.
   * * Can affect the list of available login promotions {@link Wl_Book_Process_Purchase_PurchaseModel}.
   *      If a given client is eligible for such a promotion, but the remaining sessions (minus those previously
   *      selected) in it do not allow it to be applied to the selected session, then such promotion will simply
   *      not be returned for the client.
   * * The order of clients across all APIs must be the same to guarantee their results.
   *
   * Each element has the following structure:
   *
   * @get get
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_group[]}
   */
  this.a_login_promotion_group = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} i_period The number of periods specified by `id_period` between individual payments.
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {string} k_currency The payment currency key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_visit_limit
   * @property {string} s_title The limit description.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template} a_installment_template A list of installment plans. Every element has the next keys:
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_visit_limit} a_visit_limit This is only set for Purchase Options. A list of limits on booking by the Purchase Option. Every element has the next keys:
   * @property {string} dl_client_prorate The client prorate date.
   * @property {string} f_price The price.
   * @property {string} f_price_early The price for early bookings.
   * @property {string} html_description The description, ready to paste in a browser.
   * @property {string} html_payment_period This is only set for Purchase Options with the 'membership' program type. The measurement unit of `i_payment_period` in short form.
   * @property {number} i_limit The limit of sessions that can be booked by Purchase Options.
   * @property {number} i_payment_period This is only set for Purchase Options with the 'membership' program type. The duration of the regular payment interval.
   * @property {number} i_session This is only set for purchases of single sessions. The number of sessions booked simultaneously.
   * @property {number} id_program_category Program type categories.
   * @property {number} id_program_type Program types.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_contract If `true`, the Purchase Option requires a contract assignment. Otherwise, this will be `false`.
   * @property {boolean} is_convert If `true`, the Purchase Option converts to another instance upon expiration. Otherwise, this will be `false`.
   * @property {boolean} is_renew If `true`, the Purchase Option is renewable. Otherwise, this will be `false`.
   * @property {boolean} is_renew_check If `true`, the Purchase Option is renewable and the "auto-renew" option is turned on by default. Otherwise, this will be `false`.
   * @property {string} k_id The key of the Purchase Option in the database. The table depends on `id_purchase_item`.
   * @property {string} k_login_prize The key of the user's prize that can be used instead a Purchase Option to book the session.
   * @property {string} k_reward_prize The key of the reward prize that can be used instead a Purchase Option to book the session.
   * @property {string} m_prorate Payment for membership prorate. Not empty only if prorate payment is required.
   * @property {string} s_contract The contract of the Purchase Option. This is only set if `is_contract` is `true`.
   * @property {string} s_payment_duration This is only set for Purchase Options with the 'membership' program type. The measurement unit of `i_payment_period`.
   * @property {string} s_promotion_convert This is only set if `is_convert` is `true`. The title to use for the new Purchase Option instance upon auto-renewal.
   * @property {string} s_title The title.
   * @property {string} s_value The unique identifier.
   */

  /**
   * A list of Purchase Options that are available for the session(s) being booked. Keys refer to unique string IDs,
   * and values refer arrays with the next fields:
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_reward_prize
   * @property {string} f_price The price, always '0'.
   * @property {number} i_limit The limit of sessions that can be booked with reward prize.
   * @property {number} i_score Prize price in points.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The key of the Purchase Option in the database. The table depends on `id_purchase_item`.
   * @property {string} k_reward_prize Key of redeemable prize.
   * @property {string} s_value The unique identifier.
   * @property {string} text_title User-friendly prize description.
   */

  /**
   * List of redeemable prizes which can be used to pay for service.
   * Each element has the following fields:
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_reward_prize[]}
   */
  this.a_reward_prize = undefined;

  /**
   * The list of sessions being booked.
   *
   * Keys are class period keys. 
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @get get
   * @type {string[]}
   */
  this.a_session = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_session_pass
   * @property {number} i_remain Number of remaining visits on session pass.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_session_pass Session pass key.
   * @property {string} s_title Session pass title.
   */

  /**
   * The list of session passes that might be used in booking process.
   * Each element has the following fields:
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_session_pass[]}
   */
  this.a_session_pass = undefined;

  /**
   * The selected sessions on the wait list that are unpaid.
   *
   * Keys are class period keys. 
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @get get
   * @type {string[]}
   */
  this.a_session_wait_list_unpaid = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The image height in pixels. Specify this value if you need image to be returned in specific size.
   * The returned image will have the default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * The image width in pixels. Specify this value if you need image to be returned in specific size.
   * The returned image will have the default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Determines if the client must authorize the credit card.
   *
   * @get get
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag, and the check will still be performed.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = false;

  /**
   * Indicates if the drop-in rate should be the default promotion.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_default = undefined;

  /**
   * The business key.
   *
   * `null` if business key was not passed.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The default Purchase Option key.
   * This will be empty if the class has no default Purchase Option.
   *
   * @get result
   * @type {string}
   */
  this.k_promotion_default = undefined;

  /**
   * `true` to show "book for" option in booking wizard. `false` for default behavior.
   *
   * @get get
   * @type {boolean}
   */
  this.show_relation = false;

  /**
   * The client key for which the booking is being made.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseModel.prototype.config=function()
{
  return {"a_field":{"a_login_prize":{"get":{"result":true}},"a_login_promotion":{"get":{"result":true}},"a_login_promotion_group":{"get":{"get":true}},"a_purchase":{"get":{"result":true}},"a_reward_prize":{"get":{"result":true}},"a_session":{"get":{"get":true}},"a_session_pass":{"get":{"result":true}},"a_session_wait_list_unpaid":{"get":{"get":true}},"dt_date_gmt":{"get":{"get":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"id_mode":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_card_authorize":{"get":{"get":true}},"is_credit_card_check":{"get":{"get":true}},"is_single_default":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"k_promotion_default":{"get":{"result":true}},"show_relation":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {?string} k_business The business key. `null` if business key was not passed.
 * @param {string} uid The client key for which the booking is being made.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns available purchase options, existing client promotions, session passes, and prizes for the specified session.
 *
 * Loads all purchase options that can be used to book the specified class period for the given user, including
 * existing login promotions with remaining session counts, new purchasable options, reward prizes, and login prizes.
 * Returns pricing, image, program category, and availability data for each option.
 *
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
