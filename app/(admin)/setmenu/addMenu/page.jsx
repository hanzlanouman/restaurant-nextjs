'use client';
import AddItemsForm from '@/components/admin/addItemsForm';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCloudSignature, getCloudConfig } from '@/lib/helpers';

const uploadImage = async (file) => {
  const { signature, timestamp } = await getCloudSignature();
  const cloudConfig = await getCloudConfig();
  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', cloudConfig.key);
  formData.append('timestamp', timestamp.toString());
  formData.append('signature', signature);

  const url = `https://api.cloudinary.com/v1_1/${cloudConfig.name}/action`;

  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  return {
    url: data.secure_url,
    id: data.public_id,
  };
};

const AddItems = () => {
  return (
    <div className='flex justify-center items-center bg-zinc-800 w-full py-4'>
      <AddItemsForm uploadImage={uploadImage} />
    </div>
  );
};

export default AddItems;
