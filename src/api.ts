import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';

interface IConstructor {
  url?: string;
  apiKey: string;
  timeout?: number;
}

export default class Api {
  client: AxiosInstance;
  apiKey: string;
  constructor({
    url = 'https://api.tookanapp.com/v2/',
    apiKey = '',
    timeout = 10 * 1000,
  }: IConstructor) {
    this.client = axios.create({
      baseURL: url,
      timeout,
    });
    this.apiKey = apiKey;
  }

  /*
 AGENT API's
 */

  editAgent = async (object: any) => {
    const path = '/edit_agent';
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  addAgent = async (object: any) => {
    const path = '/add_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAllAgents = async (object: any) => {
    const path = '/get_available_agents';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  blockAndUnblockAgent = async (object: any) => {
    const path = '/block_and_unblock_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  viewAgentProfile = async (object: any) => {
    const path = '/view_fleet_profile';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  updateAgentTags = async (object: any) => {
    const path = '/update_fleet_tags';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAgentTags = async (object: any) => {
    const path = '/get_fleet_tags';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAgentLogs = async (object: any) => {
    const path = '/get_agent_duty_logs';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAgentLocation = async (object: any) => {
    const path = '/get_fleet_location';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  sendNotificationToAgent = async (object: any) => {
    const path = '/send_notification';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAgentSchedule = async (object: any) => {
    const path = '/get_fleets_availability';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  assignAgentToTask = async (object: any) => {
    const path = '/assign_fleet_to_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteAgent = async (object: any) => {
    const path = '/delete_fleet_account';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 TASK API's
 */

  createTask = async (object: any) => {
    const path = '/create_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  createMultipleTasks = async (object: any) => {
    const path = '/create_multiple_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getTaskDetails = async (object: any) => {
    const path = '/get_task_details';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getTaskDetailsFromOrderId = async (object: any) => {
    const path = '/get_task_details_by_order_id';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  editTask = async (object: any) => {
    const path = '/edit_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  editMultipleTask = async (object: any) => {
    const path = '/edit_multiple_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  updateTaskStatus = async (object: any) => {
    const path = '/update_task_status';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  startTask = async (object: any) => {
    const path = '/update_task_status';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  cancelTask = async (object: any) => {
    const path = '/update_task_status';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  assignTask = async (object: any) => {
    const path = '/assign_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  autoAssignTask = async (object: any) => {
    const path = '/re_autoassign_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAllTasks = async (object: any) => {
    const path = '/get_all_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getTaskStatistics = async (object: any) => {
    const path = '/user_task_stats';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteTask = async (object: any) => {
    const path = '/delete_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 TEAM API's
 */

  createTeam = async (object: any) => {
    const path = '/create_team';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  updateTeam = async (object: any) => {
    const path = '/update_team';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteTeam = async (object: any) => {
    const path = '/delete_team';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getTeamDetails = async (object: any) => {
    const path = '/view_teams';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getJobAndAgentDetails = async (object: any) => {
    const path = '/get_job_and_fleet_details';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 MANAGER API's
 */

  createManager = async (object: any) => {
    const path = '/add_manager';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  viewManager = async (object: any) => {
    const path = '/view_all_manager';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteManager = async (object: any) => {
    const path = '/delete_manager';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 CUSTOMER API's
 */

  getCustomers = async (object: any) => {
    const path = '/get_all_customers';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  addCustomer = async (object: any) => {
    const path = '/customer/add';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  editCustomer = async (object: any) => {
    const path = '/customer/edit';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteCustomer = async (object: any) => {
    const path = '/delete_customer';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  findCustomerWithPhone = async (object: any) => {
    const path = '/find_customer_with_phone';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  findCustomerWithName = async (object: any) => {
    const path = '/find_customer_with_name';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  viewCustomerProfile = async (object: any) => {
    const path = '/view_customer_profile';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 MERCHANT API's
 */

  createMerchant = async (object: any) => {
    const path = '/merchant/sign_up';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  viewMerchant = async (object: any) => {
    const path = '/merchant/get_merchant';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  editMerchant = async (object: any) => {
    const path = '/merchant/edit_merchant';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getMerchantDetails = async (object: any) => {
    const path = '/merchant/get_merchant_data';
    object.api_key = this.apiKey;
    return this.client.get(path, {
      params: { api_key: this.apiKey, ...object },
    });
  };

  getMerchantReport = async (object: any) => {
    const path = '/merchant/report';
    object.api_key = this.apiKey;
    return this.client.get(path, { params: { api_key: this.apiKey, ...object } });
  };

  blockAndUnblockMerchant = async (object: any) => {
    const path = '/merchant/block_merchant';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteMerchant = async (object: any) => {
    const path = '/merchant/delete';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getAvailableMerchantAgents = async (object: any) => {
    const path = '/get_available_agents';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  assignMerchantAgentToTask = async (object: any) => {
    const path = '/assign_fleet_to_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  createMerchantTask = async (object: any) => {
    const path = '/create_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  createMultipleMerchantTasks = async (object: any) => {
    const path = '/create_multiple_tasks';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  editMerchantTask = async (object: any) => {
    const path = '/edit_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  assignMerchantToTask = async (object: any) => {
    const path = '/merchant/assign_merchant_to_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  getMerchantTeams = async (object: any) => {
    const path = '/merchant/get_merchant_teams';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 GEOFENCE API's
 */

  addRegion = async (object: any) => {
    const path = '/add_region';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  editRegion = async (object: any) => {
    const path = '/edit_region';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  viewRegions = async (object: any) => {
    const path = '/view_regions';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  viewRegionDetails = async (object: any) => {
    const path = '/view_regions_only';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  removeRegionForAgent = async (object: any) => {
    const path = '/remove_region_for_agent';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteRegion = async (object: any) => {
    const path = '/remove_region';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  /*
 MISSION API's
 */
  createMission = async (object: any) => {
    const path = '/create_mission_task';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  missionList = async (object: any) => {
    const path = '/get_mission_list';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };

  deleteMission = async (object: any) => {
    const path = '/delete_mission';
    object.api_key = this.apiKey;
    return this.client.post(path, { api_key: this.apiKey, ...object });
  };
}
