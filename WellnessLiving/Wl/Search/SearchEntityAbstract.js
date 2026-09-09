/**
 * Base class for search entity.
 */
function Wl_Search_SearchEntityAbstract()
{
  // Empty constructor.
}

/**
 * Client search entity.
 *
 * @type {number}
 */
Wl_Search_SearchEntityAbstract.LoginSearchEntity = 66;

/**
 * Search entity for an example and testing.
 *
 * `#[\AllowDynamicProperties]` This class can be stored in the database as a serialized object and contain fields that
 *  are no longer present in the current implementation.
 *
 * @type {number}
 */
Wl_Search_SearchEntityAbstract.SearchTestEntity = 21;

/**
 * Search entity for testing without interface class.
 *
 * @type {number}
 */
Wl_Search_SearchEntityAbstract.SearchTestEntityNoInterface = 169;
