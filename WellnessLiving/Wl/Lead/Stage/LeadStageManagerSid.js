/**
 * Who manages the lead stages of the locations of an Enterprise.
 *
 * The value is chosen by the Enterprise Headquarters in the setting "Lead stages are managed by" and is stored as
 * {@link Wl_Business_Config_Option_OptionSidAbstract}.
 *
 * Last used ID: 2.
 */
function Wl_Lead_Stage_LeadStageManagerSid()
{
  // Empty constructor.
}

/**
 * Each location manages its own lead stages, also after the Enterprise Headquarters pushed its stages to it.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageManagerSid.EACH_LOCATION = 1;

/**
 * The Enterprise Headquarters manages the lead stages. A location that received a push can view its stages, but
 * its staff can not add, rename, reorder or delete them.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageManagerSid.HEADQUARTERS = 2;
