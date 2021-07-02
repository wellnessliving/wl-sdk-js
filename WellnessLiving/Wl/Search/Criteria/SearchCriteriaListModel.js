/**
 * Search entity API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Search_Criteria_SearchCriteriaListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,s_search_entity,s_search_group,k_search_template";

  /**
   * A list of criteria with default (empty) data. Used to display default criteria list.
   * For detailed description of the elements of the array see {@link \Wl\Search\Criteria\SearchCriteriaList::toArray()}.
   *
   * @get result
   * @type {{}}
   */
  this.a_criteria_list_default = undefined;

  /**
   * A list of saved criteria. For detailed description of the elements of the array see {@link \Wl\Search\Criteria\SearchCriteriaList::toArray()}.
   *
   * @get result
   * @type {{}}
   */
  this.a_criteria_list_save = undefined;

  /**
   * Indicates that there are disabled criteria in the saved search.
   *
   * @get result
   * @type {boolean}
   */
  this.has_disable = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of existing template.
   * Primary key in the {@link SearchTemplateSql} table.
   *
   * Can be empty if template needs to be created.
   *
   * @get get
   * @type {string}
   */
  this.k_search_template = "";

  /**
   * Search entity CID list, separated by commas.
   * Constants from {@link SearchEntityAbstract} subclasses.
   *
   * @get get
   * @type {string}
   */
  this.s_search_entity = "";

  /**
   * Unique string identifying the name of the search group.
   *
   * @get get
   * @type {string}
   */
  this.s_search_group = "";

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Search_Criteria_SearchCriteriaListModel);

/**
 * @inheritDoc
 */
Wl_Search_Criteria_SearchCriteriaListModel.prototype.config=function()
{
  return {"a_field": {"a_criteria_list_default": {"get": {"result": true}},"a_criteria_list_save": {"get": {"result": true}},"has_disable": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_search_template": {"get": {"get": true}},"s_search_entity": {"get": {"get": true}},"s_search_group": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Search_Criteria_SearchCriteriaListModel.instanceGet
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} s_search_entity Search entity CID list, separated by commas. Constants from {@link SearchEntityAbstract} subclasses.
 * @param {string} s_search_group Unique string identifying the name of the search group.
 * @param {string} k_search_template Key of existing template. Primary key in the {@link SearchTemplateSql} table. Can be empty if template needs to be created.
 * @returns {Wl_Search_Criteria_SearchCriteriaListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */