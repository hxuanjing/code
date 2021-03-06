/*
 * File: app/view/Project.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Code.view.Project', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.project',

    requires: [
        'Code.view.ProjectViewModel',
        'Code.view.ProjectViewController',
        'Ext.view.Table',
        'Ext.grid.column.Column',
        'Ext.button.Button',
        'Ext.toolbar.Paging'
    ],

    controller: 'project',
    viewModel: {
        type: 'project'
    },
    title: '项目列表',
    store: 'ProjectStore',

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'projectName',
            text: '项目名称'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'comment',
            text: '中文名'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'databaseName',
            text: '数据库名'
        },
        {
            xtype: 'gridcolumn',
            width: 200,
            dataIndex: 'groupPackage',
            text: 'Group包'
        },
        {
            xtype: 'gridcolumn',
            width: 200,
            dataIndex: 'modulePackage',
            text: 'Module包'
        },
        {
            xtype: 'gridcolumn',
            width: 300,
            dataIndex: 'path',
            text: '存储地址'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'description',
            text: '项目描述'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: '打开项目',
                    listeners: {
                        click: 'onButtonClick'
                    }
                },
                {
                    xtype: 'button',
                    text: '新项目',
                    listeners: {
                        click: 'onButtonClick1'
                    }
                },
                {
                    xtype: 'button',
                    text: '删除项目',
                    listeners: {
                        click: 'deleteProject'
                    }
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            store: 'ProjectStore'
        }
    ],
    listeners: {
        select: 'onGridpanelSelect'
    }

});