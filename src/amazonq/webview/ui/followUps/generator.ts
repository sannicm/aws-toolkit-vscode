/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { MynahIcons } from '@aws/mynah-ui-chat'
import { TabType } from '../storages/tabsStorage'
import { FollowUpsBlock } from './model'

export type AuthFollowUpType = 'full-auth' | 're-auth' | 'missing_scopes'

export class FollowUpGenerator {
    public generateAuthFollowUps(tabType: TabType, authType: AuthFollowUpType): FollowUpsBlock {
        let pillText
        switch (authType) {
            case 'full-auth':
                pillText = 'Authenticate'
                break
            case 'missing_scopes':
                pillText = 'Enable Amazon Q'
                break
            case 're-auth':
                pillText = 'Re-authenticate'
                break
        }
        switch (tabType) {
            default:
                return {
                    text: '',
                    options: [
                        {
                            pillText: pillText,
                            type: authType,
                            status: 'info',
                            icon: 'refresh' as MynahIcons,
                        },
                    ],
                }
        }
    }

    public generateWelcomeBlockForTab(tabType: TabType): FollowUpsBlock {
        switch (tabType) {
            case 'featuredev':
                return {
                    text: 'Would you like to follow up with',
                    options: [
                        {
                            pillText: 'Modify source folder',
                            type: 'ModifyDefaultSourceFolder',
                        },
                    ],
                }
            default:
                return {
                    text: 'Try Examples:',
                    options: [
                        {
                            pillText: 'Explain selected code',
                            prompt: 'Explain selected code',
                            type: 'init-prompt',
                        },
                        {
                            pillText: 'How can Amazon Q help me?',
                            type: 'help',
                        },
                    ],
                }
        }
    }
}
