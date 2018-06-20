import React, { Component } from "react"
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class HistroyInfo extends Component {
  render() {
    return (
      <div class="white-shadow-brd">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Security Settings History" key="1">
            <div class="my-tbl-responsive">
              <div class="my-tbl">
                <div class="my-tbl-body">
                  <div class="my-tbl-row">
                    <div class="my-tbl-td lbl">Date</div>
                    <div class="my-tbl-td lbl">Security Settings</div>
                    <div class="my-tbl-td lbl">IP</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">02/03/2018 (07:24:09)</div>
                    <div class="my-tbl-td">Turn on SMS Authentication</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">02/03/2018 (07:24:09)</div>
                    <div class="my-tbl-td">Add Phone Number</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">11/02/2018 (06:22:26)</div>
                    <div class="my-tbl-td">Turn On Google Authentication</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">11/02/2018 (04:36:24)</div>
                    <div class="my-tbl-td">Add Google Authentication</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                </div>
              </div>
            </div>

          </TabPane>
          <TabPane tab="Login History" key="2">
          <div class="my-tbl-responsive">
              <div class="my-tbl">
                <div class="my-tbl-body">
                  <div class="my-tbl-row">
                    <div class="my-tbl-td lbl">Date</div>
                    <div class="my-tbl-td lbl">Login History</div>
                    <div class="my-tbl-td lbl">IP</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">02/03/2018 (07:24:09)</div>
                    <div class="my-tbl-td">Turn on SMS Authentication</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">02/03/2018 (07:24:09)</div>
                    <div class="my-tbl-td">Add Phone Number</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">11/02/2018 (06:22:26)</div>
                    <div class="my-tbl-td">Turn On Google Authentication</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                  <div class="my-tbl-row">
                    <div class="my-tbl-td">11/02/2018 (04:36:24)</div>
                    <div class="my-tbl-td">Add Google Authentication</div>
                    <div class="my-tbl-td">109.27.68.069</div>
                  </div>
                </div>
              </div>
            </div>
        </TabPane>
        </Tabs>
      </div>
    )
  }
}