// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IRequestContext, IService } from "@gtsc/services";

/**
 * Interface describing an blob storage connector.
 */
export interface IBlobStorageConnector extends IService {
	/**
	 * Set the blob.
	 * @param requestContext The context for the request.
	 * @param blob The data for the blob.
	 * @returns The id of the stored blob.
	 */
	set(requestContext: IRequestContext, blob: Uint8Array): Promise<string>;

	/**
	 * Get the blob.
	 * @param requestContext The context for the request.
	 * @param id The id of the blob to get.
	 * @returns The data for the blob if it can be found or undefined.
	 */
	get(requestContext: IRequestContext, id: string): Promise<Uint8Array | undefined>;

	/**
	 * Remove the blob.
	 * @param requestContext The context for the request.
	 * @param id The id of the blob to remove.
	 * @returns Nothing.
	 */
	remove(requestContext: IRequestContext, id: string): Promise<void>;
}
