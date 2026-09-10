/**
 * Returns list of ranks for specified users or login ranks.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Rank_LoginRankListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category_a_available
   * @property {string} html_condition Time and class belt conditions.
   * @property {boolean} is_next Whether this is the next rank for the user.
   * @property {boolean} is_ready Whether the user is ready for promotion to this rank.
   * @property {string} json_condition Time and class belt conditions in JSON format.
   * @property {string} k_rank Rank key. Primary key from  table.
   * @property {string} text_rank Rank title.
   */

  /**
   * @typedef {{}} Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category_a_current_a_logo
   * @property {number} i_height Actual thumbnail height.
   * @property {number} i_width Actual thumbnail width.
   * @property {boolean} is_empty `true` if the rank does not have its own image and a placeholder was returned.
   * @property {string} url URL of the thumbnail image.
   */

  /**
   * @typedef {{}} Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category_a_current
   * @property {Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category_a_current_a_logo} a_logo Rank logo thumbnail data:
   * @property {string} k_login_rank Login rank key. Primary key from  table.
   * @property {string} k_rank Rank key. Primary key from  table.
   * @property {string} text_attendance_at_rank Class attendance in the current rank.
   * @property {string} text_promote_date Belt promotion date.
   * @property {string} text_rank Rank title.
   * @property {string} text_time_at_rank Time at the current rank.
   */

  /**
   * @typedef {{}} Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category
   * @property {Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category_a_available} a_available List of ranks available for the category. Each element:
   * @property {Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category_a_current} a_current Data of the user's current rank in the category, merged with promotion condition data. Contains   only `html_condition` (the belt condition of the first available rank) when the user does not   have a current rank yet. When the user has a current rank, also contains:
   * @property {string} k_rank_category Rank category key. Primary key from  table.
   * @property {string} text_rank_category Rank category title.
   */

  /**
   * @typedef {{}} Wl_Login_Rank_LoginRankListModel_a_user_list_a_user_info
   * @property {string} html_info Result of  function.
   * @property {string} text_name Full user name.
   * @property {string} uid User key. Primary key in the  table.
   */

  /**
   * @typedef {{}} Wl_Login_Rank_LoginRankListModel_a_user_list
   * @property {Wl_Login_Rank_LoginRankListModel_a_user_list_a_rank_category} a_rank_category List of rank categories with rank details for the user. Each element:
   * @property {Wl_Login_Rank_LoginRankListModel_a_user_list_a_user_info} a_user_info User info:
   */

  /**
   * List of users with information about their ranks in the business. Each element:
   *
   * @get result
   * @type {Wl_Login_Rank_LoginRankListModel_a_user_list[]}
   */
  this.a_user_list = undefined;

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
   * Used to filter the list of ranks by their visit conditions.
   *
   * `null` if no need to filter by class.
   *
   * @get get
   * @type {?string}
   */
  this.k_class = null;

  /**
   * UIDs of users encoded by Javascript analogue of the 
   * method.
   *
   * @get get
   * @type {string}
   */
  this.s_user_key = "";

  /**
   * Users with rank categories encoded by Javascript analogue of the
   *  method. This logic was selected, because there is
   * a possibility to promote belts of too many users. In this case
   * URI is too long.
   *
   * `null` if not initialized.
   *
   * @get get
   * @type {string}
   */
  this.s_user_rank_category = "";

  /**
   * Users with rank categories and ranks that need to be saved encoded by Javascript analogue of the
   *  method.
   *
   * `null` if not initialized.
   *
   * @post post
   * @type {string}
   */
  this.s_user_rank_save = "";

  /**
   * Whether need to return user detail information (mail, phone).
   *
   * @get get
   * @type {boolean}
   */
  this.show_user_detail = true;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Rank_LoginRankListModel);

/**
 * @inheritDoc
 */
Wl_Login_Rank_LoginRankListModel.prototype.config=function()
{
  return {"a_field":{"a_user_list":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class":{"get":{"get":true}},"s_user_key":{"get":{"get":true}},"s_user_rank_category":{"get":{"get":true}},"s_user_rank_save":{"post":{"post":true}},"show_user_detail":{"get":{"get":true}}}};
};

/**
 * Returns list of ranks for specified users or login ranks.
 *
 * Validates the business and the requested users, then loads rank category and rank information for
 * each user, including the currently held rank and the ranks available for promotion in each category.
 * Users can be requested either as a plain list of user keys or as a list of user and rank category pairs.
 *
 * @function
 * @name Wl_Login_Rank_LoginRankListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves ranks for specified users in the business.
 *
 * Validates the business, the specified users, and the requested ranks, then compares them against each
 * user's current rank in each category. For every rank that changed, updates the previous rank's promotion
 * condition data, marks it as no longer current, inserts the new current rank, and propagates the
 * promotion to related franchisee businesses when applicable. Finally, logs the promotions for the client
 * belt history report.
 *
 * @function
 * @name Wl_Login_Rank_LoginRankListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
